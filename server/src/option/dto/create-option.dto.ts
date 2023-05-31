import { IsNotEmpty, IsString } from "class-validator";

export class CreateOptionDto {
    @IsString()
    @IsNotEmpty()
    description: string;
}
