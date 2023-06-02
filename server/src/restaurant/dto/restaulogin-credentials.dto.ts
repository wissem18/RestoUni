import {IsNotEmpty} from "class-validator";

export class RestauLoginCredentialsDto{

    @IsNotEmpty()
    identifiant:number;
    @IsNotEmpty()
    password: string;
}