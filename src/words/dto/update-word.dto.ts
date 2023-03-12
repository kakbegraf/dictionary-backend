import { IsNotEmpty } from 'class-validator';

export class UpdateWordDto {
    @IsNotEmpty()
    readonly word: string;

    @IsNotEmpty()
    readonly translation: string;
}