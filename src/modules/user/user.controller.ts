import {
  Controller,
  Get,
  UseGuards,
  Req,
  Param,
  Put,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Roles } from '../auth/decorator/roles.decorator';
import { RoleGuard } from '../auth/guard/roles.guard';
import { Request } from 'express';
import { UserService } from './user.service';
@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser(@Req() req: Request) {
    return req.user;
  }

  // Get profile by role admin
  @UseGuards(RoleGuard)
  @Roles('SUPER_ADMIN', 'ADMIN')
  @Get(':id')
  async getProfile(@Param() param: { id: string }) {
    try {
      return await this.userService.getUserById(param.id);
    } catch (error) {
      return error;
    }
  }

  // Update user role

  @UseGuards(RoleGuard)
  @Roles('SUPER_ADMIN')
  @Put('update-role')
  async updateUserRole(@Body() body: { id: string; role: string }) {
    return this.userService.updateUserRole(body);
  }
}
