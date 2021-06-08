import{Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity()

export class FoodcategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 }) 
    name: string;

    @Column()
    created_by: string;
}
