/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
<<<<<<< HEAD
import {Option} from 'src/option/entities/option.entity'
export class CreateVoteDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
=======
import validatorsErrorMessages from 'src/validator-error-messagets';

export class CreateVoteDto {
    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
>>>>>>> be812eb7f5be419fe59ce0ed3d0bf17311f15fcb
    description: string;
}
