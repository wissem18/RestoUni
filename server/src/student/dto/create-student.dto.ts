/* eslint-disable prettier/prettier */
import {IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, MinLength} from 'class-validator';
import validatorsErrorMessages from '../../validator-error-messagets';
import { Unique } from 'typeorm';
import {Type} from "class-transformer";

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    firstname: string;
     
    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    lastname: string;

    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    password: string;

    @Min(2000000, { message: `${validatorsErrorMessages.MIN_LENGTH_Student}` })
    @Max(5000000, { message: `${validatorsErrorMessages.MAX_LENGTH_student}` })
    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    cardID:number; 

    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    email: string
}
