import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

import { CreateOrderDto } from 'src/dto/orderItems.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  getOrder() {
    return this.orderService.getOrder();
  }

  @Post()
  async createOrder(@Body() order: CreateOrderDto) {
    try {
      return this.orderService.createOrder(order);
    } catch (error) {
      return error;
    }
  }
}
