import { Exclude } from 'class-transformer';
import { Entity, CreateDateColumn, UpdateDateColumn,  } from 'typeorm';

@Entity()
export class TimeStampedEntity {    
    @CreateDateColumn()
    @Exclude()
    created_at: Date;
    
    @UpdateDateColumn()
    @Exclude()
    updated_at: Date;
}