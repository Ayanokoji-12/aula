const { Controller, Get, Post, Body, Patch, Param, Delete } = require('@nestjs/common');
const { UsersService } = require('./users.service');

@Controller('users')
class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  static get parameters() {
    return [UsersService];
  }

  @Post()
  create(createUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(id) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(id, updateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(id) {
    return this.usersService.remove(+id);
  }
}

module.exports = { UsersController };
