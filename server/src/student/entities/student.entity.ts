/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { TimeStampEntity } from 'src/timestamp/timpestamp.entity';
import { VoteStudent } from 'src/vote-student/entities/vote-student.entity';
import { Vote } from 'src/vote/entities/vote.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import {v4 as uuid} from 'uuid';
@Entity()
export class Student extends TimeStampEntity{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  firstname: string;

  @Column({ length: 50 })
  lastname: string;
   
  @Column()
  cardID: number 

  @Column({ length: 50 })
  email: string;
  
  @Column()
   password:string;

  
  @ManyToOne(()=>Restaurant , (Restaurant)=>Restaurant.Students)
  restaurant:Restaurant;

  @OneToMany(() => VoteStudent, (voteStudent) => voteStudent.student)
  voteStudents: VoteStudent[];
}
