/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
import {Option} from 'src/option/entities/option.entity'
export class CreateVoteDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    description: string;
}
