/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import validatorsErrorMessages from "src/validator-error-messagets";

export class CreateOptionDto {
    @IsString()
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })
    description: string;
}
