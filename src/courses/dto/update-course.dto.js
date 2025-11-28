const { IsOptional, IsNumber } = require('class-validator');

class UpdateCourseDto {
  @IsOptional()
  titulo;

  @IsOptional()
  descripcion;

  @IsOptional()
  grado;

  @IsOptional()
  seccion;

  @IsOptional()
  @IsNumber()
  docente_id;
}

module.exports = { UpdateCourseDto };
