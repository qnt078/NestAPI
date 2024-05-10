import { Module } from '@nestjs/common';

import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';

import { UserModule } from './modules/user/user.module';
@Module({
  imports: [PrismaModule, ProductsModule, AuthModule, UserModule],
})
export class AppModule {}
