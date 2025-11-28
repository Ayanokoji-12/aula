const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { TasksService } = require('./tasks.service');
const { TasksController } = require('./tasks.controller');
const { Task } = require('./task.entity');

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
})
class TasksModule {}

module.exports = { TasksModule };
