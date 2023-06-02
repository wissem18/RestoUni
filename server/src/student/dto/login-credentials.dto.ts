import {IsNotEmpty, IsNumber} from "class-validator";
import {Type} from "class-transformer";

export class LoginCredentialsDto{
    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    cardID:number;
    @IsNotEmpty()
    password: string;
}