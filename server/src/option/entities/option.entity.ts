import { TimeStampEntity } from '../../timestamp/timpestamp.entity';
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from '../../vote/entities/vote.entity';
@Entity()
export class Option extends TimeStampEntity{
@PrimaryGeneratedColumn("uuid")
id: string;

@Column()
description:string;

@ManyToOne(()=>Vote , (Vote)=>Vote.Options)
vote:Vote;
}
