import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVoteDto {
    @IsString()
    @IsNotEmpty()
    description: string;
}
