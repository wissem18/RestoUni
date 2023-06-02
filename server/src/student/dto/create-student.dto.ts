/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
    @IsString()
    @IsNotEmpty()
    firstname: string;
     
    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    cardID:number; 

    @IsString()
    @IsNotEmpty()
    email: string
}
