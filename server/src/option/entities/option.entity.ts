import { TimeStampEntity } from '../../timestamp/timpestamp.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from '../../vote/entities/vote.entity';
<<<<<<< HEAD
=======
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from 'src/vote/entities/vote.entity';
>>>>>>> bb0429d635bcf13e2567a3ab9b64a46e112de40c
@Entity()
export class Option extends TimeStampEntity{
@PrimaryGeneratedColumn("uuid")
id: string;

@Column()
description:string;

@ManyToOne(()=>Vote , (Vote)=>Vote.Options)
vote:Vote;
}
