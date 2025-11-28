const { EntitySchema } = require('typeorm');

module.exports = {
  Course: new EntitySchema({
    name: 'Course',
    tableName: 'courses',
    columns: {
      id: {
        primary: true,
        type: 'int',
        generated: true,
      },
      titulo: {
        type: 'varchar',
      },
      descripcion: {
        type: 'text',
      },
      grado: {
        type: 'varchar',
      },
      seccion: {
        type: 'varchar',
      },
      docente_id: {
        type: 'int',
      },
    },
    relations: {
      docente: {
        target: 'User',
        type: 'many-to-one',
        joinColumn: { name: 'docente_id' },
        inverseSide: 'cursos',
      },
      tareas: {
        target: 'Task',
        type: 'one-to-many',
        inverseSide: 'curso',
      },
      recursos: {
        target: 'Resource',
        type: 'one-to-many',
        inverseSide: 'curso',
      },
      foros: {
        target: 'Forum',
        type: 'one-to-many',
        inverseSide: 'curso',
      },
    },
  }),
};
