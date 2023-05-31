import { TimeStampEntity } from '../../timestamp/timpestamp.entity';
<<<<<<< HEAD
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from '../../vote/entities/vote.entity';
=======
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from 'src/vote/entities/vote.entity';
>>>>>>> 80d2e8575b83374bd8c55b8e8e828fad1f255917
@Entity()
export class Option {
@PrimaryGeneratedColumn("uuid")
id: string;

@Column()
description:string;

@ManyToOne(()=>Vote , (Vote)=>Vote.Options)
vote:Vote;
}
