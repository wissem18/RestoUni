import {IsNotEmpty} from "class-validator";

export class LoginCredentialsDto{

    @IsNotEmpty()
    cardID:number;
    @IsNotEmpty()
    password: string;
}