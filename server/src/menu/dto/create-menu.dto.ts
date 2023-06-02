import {IsNotEmpty, IsString} from "class-validator";

export class CreateMenuDto {
    @IsNotEmpty()
    @IsString()
    entrée: string;

    @IsNotEmpty()
    @IsString()
    plat: string;
    @IsNotEmpty()
    @IsString()
    dessert: string;

    @IsNotEmpty()
    @IsString()
    date : string;


}
