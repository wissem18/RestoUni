import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
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
    @IsNumber()
    restaurantId: number;
}
