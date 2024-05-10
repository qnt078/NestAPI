import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable() // 👈 This is a decorator;
export class UserService {
  constructor(private prismaService: PrismaService) {} // 👈 This is a constructor;

  async getUserById() {}

  getOne() {
    return 'getOne';
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
