const { IsEmail, IsNotEmpty } = require('class-validator');

class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email;

  @IsNotEmpty()
  contraseña;
}

module.exports = { LoginDto };
