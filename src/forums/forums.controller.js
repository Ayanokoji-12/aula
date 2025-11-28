const { Controller, Get, Post, Body, Patch, Param, Delete } = require('@nestjs/common');
const { ForumsService } = require('./forums.service');

@Controller('forums')
class ForumsController {
  constructor(forumsService) {
    this.forumsService = forumsService;
  }

  static get parameters() {
    return [ForumsService];
  }

  @Post()
  create(createForumDto) {
    return this.forumsService.create(createForumDto);
  }

  @Get()
  findAll() {
    return this.forumsService.findAll();
  }

  @Get(':id')
  findOne(id) {
    return this.forumsService.findOne(+id);
  }

  @Patch(':id')
  update(id, updateForumDto) {
    return this.forumsService.update(+id, updateForumDto);
  }

  @Delete(':id')
  remove(id) {
    return this.forumsService.remove(+id);
  }
}

module.exports = { ForumsController };
