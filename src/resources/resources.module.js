const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { ResourcesService } = require('./resources.service');
const { ResourcesController } = require('./resources.controller');
const { Resource } = require('./resource.entity');

@Module({
  imports: [TypeOrmModule.forFeature([Resource])],
  controllers: [ResourcesController],
  providers: [ResourcesService],
})
class ResourcesModule {}

module.exports = { ResourcesModule };
