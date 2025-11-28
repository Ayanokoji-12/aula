const { IsOptional, IsNumber } = require('class-validator');

class UpdateForumDto {
  @IsOptional()
  titulo;

  @IsOptional()
  @IsNumber()
  curso_id;
}

module.exports = { UpdateForumDto };
