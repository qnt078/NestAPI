import { Module } from '@nestjs/common';

import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './modules/prisma/prisma.module';

import { UserModule } from './modules/user/user.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [PrismaModule, ProductsModule, AuthModule, UserModule, OrderModule],
})
export class AppModule {}
