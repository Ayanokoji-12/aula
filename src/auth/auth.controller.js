const { Controller, Post, Body } = require('@nestjs/common');
const { AuthService } = require('./auth.service');

@Controller('auth')
class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  static get parameters() {
    return [AuthService];
  }

  @Post('login')
  async login(loginDto) {
    return this.authService.login(loginDto);
  }
}

module.exports = { AuthController };
