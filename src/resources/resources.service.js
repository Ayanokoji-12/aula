const { Injectable, NotFoundException } = require('@nestjs/common');
const { InjectRepository } = require('@nestjs/typeorm');
const { Repository } = require('typeorm');
const { Resource } = require('./resource.entity');

@Injectable()
class ResourcesService {
  constructor(resourcesRepository) {
    this.resourcesRepository = resourcesRepository;
  }

  static get parameters() {
    return [{ token: 'ResourceRepository', type: Repository }];
  }

  async create(createResourceDto) {
    const resource = this.resourcesRepository.create(createResourceDto);
    return await this.resourcesRepository.save(resource);
  }

  async findAll() {
    return await this.resourcesRepository.find({ relations: ['curso'] });
  }

  async findOne(id) {
    const resource = await this.resourcesRepository.findOne({
      where: { id },
      relations: ['curso'],
    });
    if (!resource) {
      throw new NotFoundException(`Recurso con ID ${id} no encontrado`);
    }
    return resource;
  }

  async update(id, updateResourceDto) {
    const resource = await this.findOne(id);
    Object.assign(resource, updateResourceDto);
    return await this.resourcesRepository.save(resource);
  }

  async remove(id) {
    const resource = await this.findOne(id);
    await this.resourcesRepository.remove(resource);
    return { message: 'Recurso eliminado correctamente' };
  }
}

module.exports = { ResourcesService };
