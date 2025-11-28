const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { MessagesService } = require('./messages.service');
const { MessagesController } = require('./messages.controller');
const { Message } = require('./message.entity');

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessagesController],
  providers: [MessagesService],
})
class MessagesModule {}

module.exports = { MessagesModule };
