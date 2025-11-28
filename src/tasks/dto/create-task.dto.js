const { IsNotEmpty, IsNumber, IsDateString } = require('class-validator');

class CreateTaskDto {
  @IsNotEmpty()
  titulo;

  @IsNotEmpty()
  descripcion;

  @IsNotEmpty()
  @IsDateString()
  fecha_entrega;

  @IsNotEmpty()
  @IsNumber()
  curso_id;

  @IsNotEmpty()
  @IsNumber()
  creado_por;
}

module.exports = { CreateTaskDto };
