/* eslint-disable prettier/prettier */
import {Column
    , ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Entity, } from "typeorm";
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
