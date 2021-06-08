import { Injectable } from '@nestjs/common';
import { FoodEntity } from "./food.entity";
import { FoodcategoryEntity } from "./foodcategory.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(FoodEntity)
        private readonly taskRepo: Repository<FoodEntity>
      ){}
        //service for food
        async findAllFood(): Promise<FoodEntity[]>{
          return await this.taskRepo.find();
        }
    
        async findOndFood(id: number): Promise<FoodEntity>{
            return await this.taskRepo.findOne(id);
        }
    
        async CreateFood(food: FoodEntity): Promise<FoodEntity>{
          return await this.taskRepo.save(food);
        }
        async UpdateFood(food: FoodEntity): Promise<UpdateResult>
        {
          return await this.taskRepo.update(food.id, food);
        }
        async delete(id): Promise<DeleteResult> {
          return await this.taskRepo.delete(id);
        }
    
        //Service for food category
       
}
