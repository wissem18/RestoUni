import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';


export class CreateRestaurantDto {

    @IsString()
    @IsNotEmpty()
    name: string;


    @IsString()
    @IsNotEmpty()
    identifiant: string;
    

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()
    telephone: number;

    @IsString()
    localisation: string;

}
