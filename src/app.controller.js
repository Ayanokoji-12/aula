const { Controller, Get } = require('@nestjs/common');

@Controller()
class AppController {
  @Get()
  getHello() {
    return { message: 'API Aula Virtual funcionando correctamente', status: 'OK' };
  }
}

module.exports = { AppController };
