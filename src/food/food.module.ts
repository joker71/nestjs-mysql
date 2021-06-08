import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { FoodEntity } from "./food.entity";
import { FoodcategoryEntity } from "./foodcategory.entity";
import { TypeOrmModule } from '@nestjs/typeorm'; 

@Module({
  imports: [TypeOrmModule.forFeature([FoodEntity,FoodcategoryEntity])],
  providers: [FoodService],
  controllers: [FoodController]
})
export class FoodModule {}
