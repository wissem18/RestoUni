/* eslint-disable prettier/prettier */
<<<<<<< HEAD
import {Column, CreateDateColumn, DeleteDateColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Entity, PrimaryColumn} from "typeorm";
=======
import {Column
    , ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Entity, } from "typeorm";
>>>>>>> be812eb7f5be419fe59ce0ed3d0bf17311f15fcb
import { TimeStampEntity } from 'src/timestamp/timpestamp.entity';
import {Restaurant} from "../../restaurant/entities/restaurant.entity";
@Entity('menu')
export class Menu extends TimeStampEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    entrée: string;
    @Column()
    plat: string;
    @Column()
    dessert: string;
    @Column('date')
    date : string;
    @ManyToOne(() => Restaurant, Restaurant => Restaurant.Menus)
    restaurant: Restaurant;
}
