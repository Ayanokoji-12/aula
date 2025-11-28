const { IsNotEmpty, IsNumber } = require('class-validator');

class CreateMessageDto {
  @IsNotEmpty()
  contenido;

  @IsNotEmpty()
  @IsNumber()
  foro_id;

  @IsNotEmpty()
  @IsNumber()
  usuario_id;
}

module.exports = { CreateMessageDto };
