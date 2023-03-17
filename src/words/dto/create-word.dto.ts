import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreateWordDto {

    @IsNotEmpty()
    @ApiProperty({example: 'Hi', description: 'English word'})
    readonly word: string

    @IsNotEmpty()
    @ApiProperty({example: 'Првиет', description: 'Translated word'})
    readonly translation: string
}