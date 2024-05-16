import { IsOptional } from 'class-validator';
export class ProductDto {
  @IsOptional()
  name: string;
  @IsOptional()
  price: number;
  @IsOptional()
  description: string;
}
