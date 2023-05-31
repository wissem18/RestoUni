import { TimeStampEntity } from "src/timestamp/timpestamp.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import {v4 as uuid} from "uuid";
import { Option } from "src/option/entities/option.entity";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { Student } from "src/student/entities/student.entity";

@Entity("Votes")
export class Vote extends TimeStampEntity {
    @PrimaryGeneratedColumn()
    id: uuid;
    
    @Column({ type: "varchar", length: 64 })
    description: string;
    
    @OneToMany(() => Option, (Option) => Option.vote,
    { cascade: true, onUpdate: "CASCADE", onDelete: "CASCADE"})
    @JoinTable()
    Options: Option[];

    @ManyToOne(()=>Restaurant , (Restaurant)=>Restaurant.Students)
    restaurant:Restaurant;

    @ManyToMany(
        () => Student,
        (Student) => Student.votes,
        { cascade: true, onUpdate: "CASCADE", onDelete: "CASCADE" }
    )
    @JoinTable({ name: "votes_students" })
    Students?: Student[];
    
}
