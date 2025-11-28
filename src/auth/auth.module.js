const { Module } = require('@nestjs/common');
const { AuthService } = require('./auth.service');
const { AuthController } = require('./auth.controller');
const { UsersModule } = require('../users/users.module');

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
class AuthModule {}

module.exports = { AuthModule };
