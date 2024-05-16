import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne() {
    return this.productsService.getOne();
  }

  @Post('add')
  async create(@Body() product: ProductDto) {
    try {
      return this.productsService.createProduct(product);
    } catch (error) {
      return error;
    }
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
