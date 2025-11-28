const { EntitySchema } = require('typeorm');

module.exports = {
  Message: new EntitySchema({
    name: 'Message',
    tableName: 'messages',
    columns: {
      id: {
        primary: true,
        type: 'int',
        generated: true,
      },
      contenido: {
        type: 'text',
      },
      fecha: {
        type: 'datetime',
        createDate: true,
      },
      foro_id: {
        type: 'int',
      },
      usuario_id: {
        type: 'int',
      },
    },
    relations: {
      foro: {
        target: 'Forum',
        type: 'many-to-one',
        joinColumn: { name: 'foro_id' },
        inverseSide: 'mensajes',
      },
      usuario: {
        target: 'User',
        type: 'many-to-one',
        joinColumn: { name: 'usuario_id' },
        inverseSide: 'mensajes',
      },
    },
  }),
};
