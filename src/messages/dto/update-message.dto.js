const { IsOptional, IsNumber } = require('class-validator');

class UpdateMessageDto {
  @IsOptional()
  contenido;

  @IsOptional()
  @IsNumber()
  foro_id;

  @IsOptional()
  @IsNumber()
  usuario_id;
}

module.exports = { UpdateMessageDto };
