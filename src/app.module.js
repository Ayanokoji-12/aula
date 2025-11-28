const { Module } = require('@nestjs/common');
const { TypeOrmModule } = require('@nestjs/typeorm');
const { AppController } = require('./app.controller');
const { AppService } = require('./app.service');
const { UsersModule } = require('./users/users.module');
const { CoursesModule } = require('./courses/courses.module');
const { TasksModule } = require('./tasks/tasks.module');
const { ResourcesModule } = require('./resources/resources.module');
const { ForumsModule } = require('./forums/forums.module');
const { MessagesModule } = require('./messages/messages.module');
const { AuthModule } = require('./auth/auth.module');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'aula_virtual_nest',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CoursesModule,
    TasksModule,
    ResourcesModule,
    ForumsModule,
    MessagesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
class AppModule {}

module.exports = { AppModule };
