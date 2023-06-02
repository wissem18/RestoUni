/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
import validatorsErrorMessages from 'src/validator-error-messagets';

export class CreateVoteDto {
    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    description: string;
}
