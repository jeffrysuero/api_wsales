
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity("category")
export class categoryEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name_category:string;
}