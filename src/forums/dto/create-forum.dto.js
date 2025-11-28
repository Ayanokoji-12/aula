const { IsNotEmpty, IsNumber } = require('class-validator');

class CreateForumDto {
  @IsNotEmpty()
  titulo;

  @IsNotEmpty()
  @IsNumber()
  curso_id;
}

module.exports = { CreateForumDto };
