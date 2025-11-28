const { EntitySchema } = require('typeorm');

module.exports = {
  User: new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
      id: {
        primary: true,
        type: 'int',
        generated: true,
      },
      nombre: {
        type: 'varchar',
      },
      email: {
        type: 'varchar',
        unique: true,
      },
      contraseña: {
        type: 'varchar',
      },
      rol: {
        type: 'enum',
        enum: ['admin', 'docente', 'estudiante'],
      },
    },
    relations: {
      cursos: {
        target: 'Course',
        type: 'one-to-many',
        inverseSide: 'docente',
      },
      tareas: {
        target: 'Task',
        type: 'one-to-many',
        inverseSide: 'creador',
      },
      mensajes: {
        target: 'Message',
        type: 'one-to-many',
        inverseSide: 'usuario',
      },
    },
  }),
};
