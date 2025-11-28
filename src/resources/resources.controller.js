const { Controller, Get, Post, Body, Patch, Param, Delete } = require('@nestjs/common');
const { ResourcesService } = require('./resources.service');

@Controller('resources')
class ResourcesController {
  constructor(resourcesService) {
    this.resourcesService = resourcesService;
  }

  static get parameters() {
    return [ResourcesService];
  }

  @Post()
  create(createResourceDto) {
    return this.resourcesService.create(createResourceDto);
  }

  @Get()
  findAll() {
    return this.resourcesService.findAll();
  }

  @Get(':id')
  findOne(id) {
    return this.resourcesService.findOne(+id);
  }

  @Patch(':id')
  update(id, updateResourceDto) {
    return this.resourcesService.update(+id, updateResourceDto);
  }

  @Delete(':id')
  remove(id) {
    return this.resourcesService.remove(+id);
  }
}

module.exports = { ResourcesController };
