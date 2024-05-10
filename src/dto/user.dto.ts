import { IsEmail, MinLength, IsOptional } from 'class-validator';
export class UserDto {
  @IsEmail()
  @IsOptional()
  email: string;
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
  @IsOptional()
  name: string;
}
