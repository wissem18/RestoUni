
import { TimeStampEntity } from 'src/timestamp/timpestamp.entity';
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import {v4 as uuid} from "uuid";
import { Student } from "src/student/entities/student.entity";
import { Menu } from "src/menu/entities/menu.entity";
import { Vote } from "src/vote/entities/vote.entity";

@Entity("Restaurants")
export class Restaurant extends TimeStampEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column({ type: "varchar", length: 64 })
    name: string;
    
    @Exclude()
    @Column({ type: "varchar", length: 26 })
    password: string;

    @Column({ type: "varchar", length: 64 })
    identifiant: string;

    @Column({ type: "varchar", length: 64 })
    localisation: string;

    @Column()
    telephone: number;


    @OneToMany(() => Student, (Student) => Student.restaurant,
    { cascade: true, onUpdate: "CASCADE", onDelete: "CASCADE"})
    @JoinTable()
    Students: Student[];

    @OneToMany(() => Menu, (Menu) => Menu.restaurant,
    { cascade: true, onUpdate: "CASCADE", onDelete: "CASCADE"})
    @JoinTable()
    Menus: Menu[];

    @OneToMany(() => Vote, (Vote) => Vote.restaurant,
    { cascade: true, onUpdate: "CASCADE", onDelete: "CASCADE"})
    @JoinTable()
    Votes: Vote[];
}
