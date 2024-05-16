import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateOrderDto } from 'src/dto/orderItems.dto';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}
  async getOrder() {
    try {
      const orders = await this.prismaService.order.findMany({
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      });
      return orders;
    } catch (error) {
      return error;
    }
  }

  async createOrder(order: CreateOrderDto) {
    try {
      const { userId, orderItems } = order;
      const createOrder = await this.prismaService.order.create({
        data: {
          userId,
          orderItems: {
            create: orderItems,
          },
        },
      });
      return createOrder;
    } catch (error) {
      return error;
    }
  }
}
