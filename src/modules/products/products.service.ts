import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from 'src/dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  getAll() {
    return 'All products';
  }

  getOne() {
    return 'getOne';
  }

  async createProduct(product: ProductDto) {
    try {
      const newProduct = await this.prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: Number(product.price),
        },
      });
      return newProduct;
    } catch (error) {
      return error;
    }
  }

  update() {
    return 'update';
  }

  remove() {
    return 'remove';
  }
}
