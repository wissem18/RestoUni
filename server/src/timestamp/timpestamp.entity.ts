/* eslint-disable prettier/prettier */
import { Exclude } from 'class-transformer';
import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn,  } from 'typeorm';
export class TimeStampEntity { 
   
    @CreateDateColumn()
    @Exclude()
    created_at: Date;
    
    @UpdateDateColumn()
    @Exclude()
    updated_at: Date;

    @DeleteDateColumn()
    @Exclude()
    deleted_at : Date;
}