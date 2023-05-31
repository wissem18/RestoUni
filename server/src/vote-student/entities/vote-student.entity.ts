import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Vote } from '../../vote/entities/vote.entity';
import { Student } from "../../student/entities/student.entity";

@Entity()
export class VoteStudent {
    @PrimaryColumn()
    studentId: string;

    @PrimaryColumn()
    voteId: string;

    @ManyToOne(() => Vote, (vote) => vote.voteStudents, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'voteId' })
    vote: Vote;

    @ManyToOne(() => Student, (student) => student.voteStudents, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'studentId' })
    student: Student;
    @Column({ length: 50 })
    option: string;
}