import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseData } from '../../global/g_Response';
import { HttpStatus, ResponseMessage } from '../../global/g_Enum';
@Injectable() // 👈 This is a decorator;
export class UserService {
  constructor(private prismaService: PrismaService) {} // 👈 This is a constructor;

  async getUserById(id: string) {
    try {
      const user = await this.prismaService.user.findUnique({
        where: {
          id: id,
        },
      });

      return new ResponseData(
        HttpStatus.SUCCESS,
        ResponseMessage.SUCCESS,
        user,
      );
    } catch (error) {
      return error;
    }
  }

  async updateUserRole(data: { id: string; role: string }) {
    try {
      // role inclule SUPER_ADMIN, ADMIN, USER
      if (!['ADMIN', 'USER'].includes(data.role)) {
        return new ResponseData(
          HttpStatus.BAD_REQUEST,
          ResponseMessage.BAD_REQUEST,
          'Role not found',
        );
      }

      await this.prismaService.user.update({
        where: {
          id: data.id,
        },
        data: {
          role: data.role,
        },
      });

      return new ResponseData(
        HttpStatus.SUCCESS,
        ResponseMessage.SUCCESS,
        null,
      );
    } catch (error) {
      return error;
    }
  }

  create() {
    return 'create';
  }

  update() {
    return 'update';
  }

  remove() {
    return 'remove';
  }
}
