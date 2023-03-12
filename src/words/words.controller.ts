import { Controller, Get, Param, Post, Put, Delete, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { WordsService } from './words.service'
import { wordI } from './interface/interfaces';
@Controller('words')
export class WordsController {
   constructor(private readonly wordsService: WordsService) {}
   @Get()
   getAll(): Promise<wordI[]> {
       return this.wordsService.getAll();
   }

   @Get(':id')
   getById(@Param('id') id: string ): Promise<wordI> {
       return this.wordsService.getById(id);
   }

   @Post()
   @UsePipes(ValidationPipe)
   create(@Body() createWord: CreateWordDto) {
       return this.wordsService.create(createWord);
   }

   @Put(':id')
   update(@Body() updateWord: UpdateWordDto, @Param('id') id: string) {
       return this.wordsService.update(updateWord, id);
   }

   @Delete(':id')
   removeWord(@Param('id') id: string) {
       return this.wordsService.remove(id);
   }
}
