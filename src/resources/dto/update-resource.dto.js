const { IsOptional, IsNumber } = require('class-validator');

class UpdateResourceDto {
  @IsOptional()
  nombre_archivo;

  @IsOptional()
  url;

  @IsOptional()
  @IsNumber()
  curso_id;
}

module.exports = { UpdateResourceDto };
