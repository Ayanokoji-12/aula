const { Injectable } = require('@nestjs/common');

@Injectable()
class AppService {
  getHello() {
    return { message: 'API Aula Virtual funcionando correctamente' };
  }
}

module.exports = { AppService };
