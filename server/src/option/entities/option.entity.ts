import { TimeStampEntity } from '../../timestamp/timpestamp.entity';
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from 'src/vote/entities/vote.entity';
@Entity()
export class Option {
@PrimaryGeneratedColumn()
id: number;

@Column()
description:string;

@ManyToOne(()=>Vote , (Vote)=>Vote.Options)
vote:Vote;
}
