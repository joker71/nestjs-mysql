import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import * as typeorm from '@nestjs/typeorm';

@Module({
  imports: [FoodModule, 
    typeorm.TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '10102018',
      database: 'food',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
