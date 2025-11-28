const { Injectable, NotFoundException } = require('@nestjs/common');
const { InjectRepository } = require('@nestjs/typeorm');
const { Repository } = require('typeorm');
const { Message } = require('./message.entity');

@Injectable()
class MessagesService {
  constructor(messagesRepository) {
    this.messagesRepository = messagesRepository;
  }

  static get parameters() {
    return [{ token: 'MessageRepository', type: Repository }];
  }

  async create(createMessageDto) {
    const message = this.messagesRepository.create(createMessageDto);
    return await this.messagesRepository.save(message);
  }

  async findAll() {
    return await this.messagesRepository.find({
      relations: ['foro', 'usuario'],
    });
  }

  async findOne(id) {
    const message = await this.messagesRepository.findOne({
      where: { id },
      relations: ['foro', 'usuario'],
    });
    if (!message) {
      throw new NotFoundException(`Mensaje con ID ${id} no encontrado`);
    }
    return message;
  }

  async update(id, updateMessageDto) {
    const message = await this.findOne(id);
    Object.assign(message, updateMessageDto);
    return await this.messagesRepository.save(message);
  }

  async remove(id) {
    const message = await this.findOne(id);
    await this.messagesRepository.remove(message);
    return { message: 'Mensaje eliminado correctamente' };
  }
}

module.exports = { MessagesService };
