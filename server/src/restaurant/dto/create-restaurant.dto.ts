/* eslint-disable prettier/prettier */
import {IsString, IsNumber, IsNotEmpty, MaxLength, MinLength, Min, Max} from 'class-validator';
import validatorsErrorMessages from 'src/validator-error-messagets';
import {ParseIntPipe} from "@nestjs/common";
import {Type} from "class-transformer";


export class CreateRestaurantDto {

    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    name: string;

    @Min(2000, { message: `${validatorsErrorMessages.MIN_LENGTH_Restaurant}` })
    @Max(5000, { message: `${validatorsErrorMessages.Max_LENGTH_Restaurant}` })
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    @Type(() => Number)
    @IsNumber()
    identifiant: number;
    

    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    password: string;


    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    @Type(() => Number)
    @IsNumber()
    telephone: number;

    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    @IsString()
    localisation: string;

}
