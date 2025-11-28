const { EntitySchema } = require('typeorm');

module.exports = {
  Forum: new EntitySchema({
    name: 'Forum',
    tableName: 'forums',
    columns: {
      id: {
        primary: true,
        type: 'int',
        generated: true,
      },
      titulo: {
        type: 'varchar',
      },
      curso_id: {
        type: 'int',
      },
    },
    relations: {
      curso: {
        target: 'Course',
        type: 'many-to-one',
        joinColumn: { name: 'curso_id' },
        inverseSide: 'foros',
      },
      mensajes: {
        target: 'Message',
        type: 'one-to-many',
        inverseSide: 'foro',
      },
    },
  }),
};
