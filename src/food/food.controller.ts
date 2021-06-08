import { Controller, Post, Put, Delete, Body, Param, Get } from '@nestjs/common';
import { FoodEntity } from "./food.entity";
import { FoodcategoryEntity } from "./foodcategory.entity";
import { FoodService } from "./food.service";
@Controller('food')
export class FoodController {
    constructor(private readonly appService: FoodService) {}

  @Get()
  getAllFood(): Promise<FoodEntity[]> {
    return this.appService.findAllFood();
  }


  @Get(':id')
  get(@Param() params) {
    return this.appService.findOndFood(params.id);
  }

  @Put()
  update(@Body() food: FoodEntity) {
    return this.appService.UpdateFood(food);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.appService.delete(params.id);
  }

  @Post()
  create(@Body() food: FoodEntity) {
    return this.appService.CreateFood(food);
  }
}