const { IsNotEmpty, IsNumber } = require('class-validator');

class CreateResourceDto {
  @IsNotEmpty()
  nombre_archivo;

  @IsNotEmpty()
  url;

  @IsNotEmpty()
  @IsNumber()
  curso_id;
}

module.exports = { CreateResourceDto };
