/* eslint-disable prettier/prettier */
import { Col } from 'react-bootstrap';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { TimeStampEntity } from 'src/timestamp/timpestamp.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {v4 as uuid} from 'uuid';
@Entity()
export class Student extends TimeStampEntity{
  @PrimaryGeneratedColumn()
  id: uuid;
  
  @Column({ length: 50 })
  firstname: string;

  @Column({ length: 50 })
  lastname: string;
   
  @Column()
  cardID: number 

  @Column({ length: 50 })
  email: string;

  @Column({})
   password:string;

  @Column()
  age: number;

  @Column()
  adress: string;

  @Column()
  phone: number;
  
  @ManyToOne(()=>Restaurant , (Restaurant)=>Restaurant.Students)
  restaurant:Restaurant;
}
