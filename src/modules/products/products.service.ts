import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getAll() {
    return 'All products';
  }

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
