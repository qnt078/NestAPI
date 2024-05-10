import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService: ProductsService) {
  }
  
  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne() {
    return this.productsService.getOne();
  }

  @Post()
  create() {
    return this.productsService.create();
  }

  @Put(':id')
  update() {
    return this.productsService.update();
  }

  @Delete(':id')
  remove() {
    return this.productsService.remove();
  }

}
