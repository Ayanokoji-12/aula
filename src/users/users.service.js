const { Injectable, NotFoundException, ConflictException } = require('@nestjs/common');
const { InjectRepository } = require('@nestjs/typeorm');
const { Repository } = require('typeorm');
const { User } = require('./user.entity');
const bcrypt = require('bcrypt');

@Injectable()
class UsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  static get parameters() {
    return [{ token: 'UserRepository', type: Repository }];
  }

  async create(createUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.contraseña, 10);
      const user = this.usersRepository.create({
        ...createUserDto,
        contraseña: hashedPassword,
      });
      return await this.usersRepository.save(user);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('El email ya está registrado');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return user;
  }

  async findByEmail(email) {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async update(id, updateUserDto) {
    const user = await this.findOne(id);
    
    if (updateUserDto.contraseña) {
      updateUserDto.contraseña = await bcrypt.hash(updateUserDto.contraseña, 10);
    }

    Object.assign(user, updateUserDto);
    return await this.usersRepository.save(user);
  }

  async remove(id) {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);
    return { message: 'Usuario eliminado correctamente' };
  }
}

module.exports = { UsersService };
