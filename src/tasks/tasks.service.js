const { Injectable, NotFoundException } = require('@nestjs/common');
const { InjectRepository } = require('@nestjs/typeorm');
const { Repository } = require('typeorm');
const { Task } = require('./task.entity');

@Injectable()
class TasksService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  static get parameters() {
    return [{ token: 'TaskRepository', type: Repository }];
  }

  async create(createTaskDto) {
    const task = this.tasksRepository.create(createTaskDto);
    return await this.tasksRepository.save(task);
  }

  async findAll() {
    return await this.tasksRepository.find({
      relations: ['curso', 'creador'],
    });
  }

  async findOne(id) {
    const task = await this.tasksRepository.findOne({
      where: { id },
      relations: ['curso', 'creador'],
    });
    if (!task) {
      throw new NotFoundException(`Tarea con ID ${id} no encontrada`);
    }
    return task;
  }

  async update(id, updateTaskDto) {
    const task = await this.findOne(id);
    Object.assign(task, updateTaskDto);
    return await this.tasksRepository.save(task);
  }

  async remove(id) {
    const task = await this.findOne(id);
    await this.tasksRepository.remove(task);
    return { message: 'Tarea eliminada correctamente' };
  }
}

module.exports = { TasksService };
