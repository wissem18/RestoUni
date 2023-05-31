import {IsNotEmpty} from "class-validator";

export class CreateMenuDto {
    @IsNotEmpty()
    entrée: string;
    @IsNotEmpty()
    plat: string;
    @IsNotEmpty()
    dessert: string;
    @IsNotEmpty()
    restaurantId: number;


}
