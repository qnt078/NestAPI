import {
  IsNotEmpty,
  IsString,
  IsArray,
  ValidateNested,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsNotEmpty()
  @IsInt()
  productId: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  orderItems: OrderItemDto[];
}
