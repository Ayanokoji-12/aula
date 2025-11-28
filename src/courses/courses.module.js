const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { CoursesService } = require('./courses.service');
const { CoursesController } = require('./courses.controller');
const { Course } = require('./course.entity');

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
class CoursesModule {}

module.exports = { CoursesModule };
