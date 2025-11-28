const { Controller, Get, Post, Body, Patch, Param, Delete } = require('@nestjs/common');
const { CoursesService } = require('./courses.service');

@Controller('courses')
class CoursesController {
  constructor(coursesService) {
    this.coursesService = coursesService;
  }

  static get parameters() {
    return [CoursesService];
  }

  @Post()
  create(createCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(id) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  update(id, updateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(id) {
    return this.coursesService.remove(+id);
  }
}

module.exports = { CoursesController };
