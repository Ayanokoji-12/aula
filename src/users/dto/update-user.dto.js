const { IsEmail, IsOptional, IsEnum, MinLength } = require('class-validator');

class UpdateUserDto {
  @IsOptional()
  nombre;

  @IsOptional()
  @IsEmail()
  email;

  @IsOptional()
  @MinLength(6)
  contraseña;

  @IsOptional()
  @IsEnum(['admin', 'docente', 'estudiante'])
  rol;
}

module.exports = { UpdateUserDto };
