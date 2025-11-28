const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { ForumsService } = require('./forums.service');
const { ForumsController } = require('./forums.controller');
const { Forum } = require('./forum.entity');

@Module({
  imports: [TypeOrmModule.forFeature([Forum])],
  controllers: [ForumsController],
  providers: [ForumsService],
})
class ForumsModule {}

module.exports = { ForumsModule };
