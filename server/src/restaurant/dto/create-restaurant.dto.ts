/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import validatorsErrorMessages from 'src/validator-error-messagets';


export class CreateRestaurantDto {

    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    name: string;

    @MinLength(2000, { message: `${validatorsErrorMessages.MIN_LENGTH_Restaurant}` })
    @MaxLength(5000, { message: `${validatorsErrorMessages.Max_LENGTH_Restaurant}` })
    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    identifiant: string;
    

    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    password: string;

    @IsNumber()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    telephone: number;

    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    @IsString()
    localisation: string;

}
