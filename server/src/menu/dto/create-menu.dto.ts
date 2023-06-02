
/* eslint-disable prettier/prettier */
import {IsNotEmpty} from "class-validator";
import validatorsErrorMessages from "src/validator-error-messagets";

export class CreateMenuDto {
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })

    entrée: string;
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })

    plat: string;
    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })

    dessert: string;

    @IsNotEmpty({ message: validatorsErrorMessages.REQUIRED })


    date : string;


}
