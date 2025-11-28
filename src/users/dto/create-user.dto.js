const { IsEmail, IsNotEmpty, IsEnum, MinLength } = require('class-validator');

class CreateUserDto {
  @IsNotEmpty()
  nombre;

  @IsEmail()
  @IsNotEmpty()
  email;

  @IsNotEmpty()
  @MinLength(6)
  contraseña;

  @IsEnum(['admin', 'docente', 'estudiante'])
  rol;
}

module.exports = { CreateUserDto };
