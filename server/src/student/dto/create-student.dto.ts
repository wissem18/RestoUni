/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import validatorsErrorMessages from '../../validator-error-messagets';
import { Unique } from 'typeorm';

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

    @MinLength(2000000, { message: `${validatorsErrorMessages.MIN_LENGTH_Student}` })
    @MaxLength(5000000, { message: `${validatorsErrorMessages.MAX_LENGTH_student}` })
    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    cardID:number; 

    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    email: string
}
