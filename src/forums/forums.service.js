const { Injectable, NotFoundException } = require('@nestjs/common');
const { InjectRepository } = require('@nestjs/typeorm');
const { Repository } = require('typeorm');
const { Forum } = require('./forum.entity');

@Injectable()
class ForumsService {
  constructor(forumsRepository) {
    this.forumsRepository = forumsRepository;
  }

  static get parameters() {
    return [{ token: 'ForumRepository', type: Repository }];
  }

  async create(createForumDto) {
    const forum = this.forumsRepository.create(createForumDto);
    return await this.forumsRepository.save(forum);
  }

  async findAll() {
    return await this.forumsRepository.find({
      relations: ['curso', 'mensajes'],
    });
  }

  async findOne(id) {
    const forum = await this.forumsRepository.findOne({
      where: { id },
      relations: ['curso', 'mensajes'],
    });
    if (!forum) {
      throw new NotFoundException(`Foro con ID ${id} no encontrado`);
    }
    return forum;
  }

  async update(id, updateForumDto) {
    const forum = await this.findOne(id);
    Object.assign(forum, updateForumDto);
    return await this.forumsRepository.save(forum);
  }

  async remove(id) {
    const forum = await this.findOne(id);
    await this.forumsRepository.remove(forum);
    return { message: 'Foro eliminado correctamente' };
  }
}

module.exports = { ForumsService };
