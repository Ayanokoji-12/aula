const { IsOptional, IsNumber, IsDateString } = require('class-validator');

class UpdateTaskDto {
  @IsOptional()
  titulo;

  @IsOptional()
  descripcion;

  @IsOptional()
  @IsDateString()
  fecha_entrega;

  @IsOptional()
  @IsNumber()
  curso_id;

  @IsOptional()
  @IsNumber()
  creado_por;
}

module.exports = { UpdateTaskDto };
