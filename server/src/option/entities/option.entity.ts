/* eslint-disable prettier/prettier */
import { TimeStampEntity } from '../../timestamp/timpestamp.entity';
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from '../../vote/entities/vote.entity';
@Entity()
export class Option extends TimeStampEntity {
    @PrimaryGeneratedColumn("uuid")
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @ManyToOne(() => Vote, (Vote) => Vote.Options,
        { cascade: true, onUpdate: "CASCADE", onDelete: "CASCADE" })
    vote: Vote;

}
