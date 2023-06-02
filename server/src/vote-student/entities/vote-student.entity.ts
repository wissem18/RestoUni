/* eslint-disable prettier/prettier */
import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Vote } from '../../vote/entities/vote.entity';
import { Student } from "../../student/entities/student.entity";
import {PrimaryGeneratedColumn} from "typeorm";
import {Option} from "../../option/entities/option.entity";

@Entity()
export class VoteStudent {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Vote, (vote) => vote.voteStudents, { onDelete: 'CASCADE' })
    vote: Vote;

    @ManyToOne(() => Student, (student) => student.voteStudents, { onDelete: 'CASCADE' })
    student: Student;

    @Column({ length: 50 })
    option: string;
}