import { IsString, IsNumber, IsNotEmpty } from 'class-validator';


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

@IsNotEmpty()
    telephone: number;

    @IsString()
    localisation: string;

}
