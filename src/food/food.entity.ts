import{Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class FoodEntity {
 @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 }) 
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  rate: number;

  @Column()
  food_img: string;

  @Column()
  food_vote_quality: number;

  @Column()
  food_last_vote: number;

  @Column()
  created_at: Date;

  @Column()
  created_by: string;

  @Column()
  food_category_id: number;
}
