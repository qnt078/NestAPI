import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Roles } from '../auth/decorator/roles.decorator';
import { RoleGuard } from '../auth/guard/roles.guard';
import { Request } from 'express';
@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  @Get()
  getUser(@Req() req: Request) {
    return req.user;
  }

  // Get profile by role admin
  @UseGuards(RoleGuard)
  @Roles('ADMIN')
  @Get('profile')
  getProfile() {
    return 'profile';
  }
}
