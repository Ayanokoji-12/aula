const { IsNotEmpty, IsNumber } = require('class-validator');

class CreateCourseDto {
  @IsNotEmpty()
  titulo;

  @IsNotEmpty()
  descripcion;

  @IsNotEmpty()
  grado;

  @IsNotEmpty()
  seccion;

  @IsNotEmpty()
  @IsNumber()
  docente_id;
}

module.exports = { CreateCourseDto };
