const { Injectable, UnauthorizedException } = require('@nestjs/common');
const { UsersService } = require('../users/users.service');
const bcrypt = require('bcrypt');

@Injectable()
class AuthService {
  constructor(usersService) {
    this.usersService = usersService;
  }

  static get parameters() {
    return [UsersService];
  }

  async login(loginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);
    
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.contraseña,
      user.contraseña,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const { contraseña, ...result } = user;
    return {
      message: 'Login exitoso',
      user: result,
    };
  }
}

module.exports = { AuthService };
