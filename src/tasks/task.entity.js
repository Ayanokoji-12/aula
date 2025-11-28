const { EntitySchema } = require('typeorm');

module.exports = {
  Task: new EntitySchema({
    name: 'Task',
    tableName: 'tasks',
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
      fecha_entrega: {
        type: 'datetime',
      },
      curso_id: {
        type: 'int',
      },
      creado_por: {
        type: 'int',
      },
    },
    relations: {
      curso: {
        target: 'Course',
        type: 'many-to-one',
        joinColumn: { name: 'curso_id' },
        inverseSide: 'tareas',
      },
      creador: {
        target: 'User',
        type: 'many-to-one',
        joinColumn: { name: 'creado_por' },
        inverseSide: 'tareas',
      },
    },
  }),
};
