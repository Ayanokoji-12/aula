const { Controller, Get, Post, Body, Patch, Param, Delete } = require('@nestjs/common');
const { TasksService } = require('./tasks.service');

@Controller('tasks')
class TasksController {
  constructor(tasksService) {
    this.tasksService = tasksService;
  }

  static get parameters() {
    return [TasksService];
  }

  @Post()
  create(createTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(id) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(id, updateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(id) {
    return this.tasksService.remove(+id);
  }
}

module.exports = { TasksController };
