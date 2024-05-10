import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';

import { UserDto } from 'src/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signIn(@Body() userDto: UserDto) {
    try {
      return await this.authService.signIn(userDto);
    } catch (error) {
      return error;
    }
  }

  @Post('signup')
  async signUp(@Body() userDto: UserDto) {
    try {
      return await this.authService.signUp(userDto);
    } catch (error) {
      return error;
    }
  }
}
