import { TimeStampEntity } from "src/timestamp/timpestamp.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import {v4 as uuid} from "uuid";
import { Option } from "../../option/entities/option.entity";
import { Restaurant } from "../../restaurant/entities/restaurant.entity";
import { Student } from "../../student/entities/student.entity";
import { VoteStudent } from "src/vote-student/entities/vote-student.entity";

@Entity()
export class Vote extends TimeStampEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({ type: "varchar", length: 64 })
    description: string;

    @OneToMany(() => Option, (Option) => Option.vote,
    { cascade: true, onUpdate: "CASCADE", onDelete: "CASCADE"})
    Options: Option[];

    @ManyToOne(()=>Restaurant , (Restaurant)=>Restaurant.Votes)
        restaurant:Restaurant;

    @OneToMany(() => VoteStudent, (voteStudent) => voteStudent.vote)
    voteStudents: VoteStudent[];
    
}
