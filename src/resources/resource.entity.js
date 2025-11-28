const { EntitySchema } = require('typeorm');

module.exports = {
  Resource: new EntitySchema({
    name: 'Resource',
    tableName: 'resources',
    columns: {
      id: {
        primary: true,
        type: 'int',
        generated: true,
      },
      nombre_archivo: {
        type: 'varchar',
      },
      url: {
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
        inverseSide: 'recursos',
      },
    },
  }),
};
