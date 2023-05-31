import { TimeStampEntity } from 'src/timestamp/timpestamp.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import {v4 as uuid} from "uuid";
import { Student } from "src/student/entities/student.entity";

@Entity("Restaurants")
export class Restaurant extends TimeStampEntity {
    @PrimaryGeneratedColumn()
    id: uuid;
    
    @Column({ type: "varchar", length: 64 })
    name: string;
    
    @Exclude()
    @Column({ type: "varchar", length: 26 })
    password: string;

    @Column({ type: "varchar", length: 64 })
    identifiant: string;

    @Column({ type: "varchar", length: 64 })
    localisation: string;

    @Column({ type: "number"})
    telephone: number;

    @OneToMany(() => Student, (Student) => Student.restaurant,
    { cascade: true, onUpdate: "CASCADE", onDelete: "CASCADE"})
    @JoinTable()
    Students: Student[];

}
