/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsNotEmpty, IsString } from 'class-validator';
export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    @IsString()
    @IsNotEmpty()
    firstname: string;
     
    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    cardID:number; 

    @IsString()
    @IsNotEmpty()
    email: string
}
