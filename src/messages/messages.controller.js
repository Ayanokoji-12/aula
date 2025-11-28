const { Controller, Get, Post, Body, Patch, Param, Delete } = require('@nestjs/common');
const { MessagesService } = require('./messages.service');

@Controller('messages')
class MessagesController {
  constructor(messagesService) {
    this.messagesService = messagesService;
  }

  static get parameters() {
    return [MessagesService];
  }

  @Post()
  create(createMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(id) {
    return this.messagesService.findOne(+id);
  }

  @Patch(':id')
  update(id, updateMessageDto) {
    return this.messagesService.update(+id, updateMessageDto);
  }

  @Delete(':id')
  remove(id) {
    return this.messagesService.remove(+id);
  }
}

module.exports = { MessagesController };
