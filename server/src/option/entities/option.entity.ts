import { TimeStampEntity } from 'src/timestamp/timpestamp.entity';
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from 'src/vote/entities/vote.entity';
export class Option {
@PrimaryGeneratedColumn()
id: number;

@Column()
description:string;

@ManyToOne(()=>Vote , (Vote)=>Vote.Options)
vote:Vote;
}