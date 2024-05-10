import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import {User, Product} from '@prisma/client';
import { UserDto } from 'src/dto/user.dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async signIn(userDto: UserDto) {
    try {
      // find user by email
      const user = await this.prisma.user.findUnique({
        where: {
          email: userDto.email,
        },
      });

      // check if user exists
      if (!user) {
        throw new ForbiddenException('User not found!');
      }

      // verify password
      const valid = await argon2.verify(user.password, userDto.password);
      if (!valid) {
        throw new ForbiddenException('Invalid password!');
      }

      return this.signToken(user.id, user.email);
    } catch (error) {
      return error;
    }
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = { userId, email };
    const token = await this.jwt.signAsync(payload);

    return {
      access_token: token,
    };
  }

  async signUp(userDto: UserDto) {
    try {
      // generate hash password
      const hash = await argon2.hash(userDto.password);

      // save user to db
      const user = await this.prisma.user.create({
        data: {
          email: userDto.email,
          password: hash,
          name: userDto.name,
        },
      });

      return user;
    } catch (error: any) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials already exist!');
        }
      }
    }
  }
}
