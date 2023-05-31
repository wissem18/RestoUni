import {Column, CreateDateColumn, DeleteDateColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Entity, PrimaryColumn} from "typeorm";
import {Restaurant} from "../../restaurant/entities/restaurant.entity";
@Entity('menu')
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    entrée: string;
    @Column()
    plat: string;
    @Column()
    dessert: string;
    @CreateDateColumn()
    createdAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(() => Restaurant, Restaurant => Restaurant.id)
    restaurant: Restaurant;


}
