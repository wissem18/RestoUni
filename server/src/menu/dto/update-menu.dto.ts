import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';
import {IsNotEmpty, IsNumber, IsString, IsUUID} from "class-validator";
import {v4 as uuid} from "uuid";
export class UpdateMenuDto extends PartialType(CreateMenuDto) {

    @IsNotEmpty()
    @IsUUID()
    id:uuid;
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
