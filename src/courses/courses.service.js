const { Injectable, NotFoundException } = require('@nestjs/common');
const { InjectRepository } = require('@nestjs/typeorm');
const { Repository } = require('typeorm');
const { Course } = require('./course.entity');

@Injectable()
class CoursesService {
  constructor(coursesRepository) {
    this.coursesRepository = coursesRepository;
  }

  static get parameters() {
    return [{ token: 'CourseRepository', type: Repository }];
  }

  async create(createCourseDto) {
    const course = this.coursesRepository.create(createCourseDto);
    return await this.coursesRepository.save(course);
  }

  async findAll() {
    return await this.coursesRepository.find({ relations: ['docente'] });
  }

  async findOne(id) {
    const course = await this.coursesRepository.findOne({
      where: { id },
      relations: ['docente', 'tareas', 'recursos', 'foros'],
    });
    if (!course) {
      throw new NotFoundException(`Curso con ID ${id} no encontrado`);
    }
    return course;
  }

  async update(id, updateCourseDto) {
    const course = await this.findOne(id);
    Object.assign(course, updateCourseDto);
    return await this.coursesRepository.save(course);
  }

  async remove(id) {
    const course = await this.findOne(id);
    await this.coursesRepository.remove(course);
    return { message: 'Curso eliminado correctamente' };
  }
}

module.exports = { CoursesService };
