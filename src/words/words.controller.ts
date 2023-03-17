import { Controller, Get, Param, Post, Put, Delete, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { WordsService } from './words.service'
import { wordI } from './interface/interfaces';
import {ApiTags, ApiResponse, ApiOperation, ApiBody} from "@nestjs/swagger";
import { WordEntity } from './word.entity';
@ApiTags('words')
@Controller('words')
export class WordsController {
   constructor(private readonly wordsService: WordsService) {}
   @Get()
   @ApiOperation({ summary: 'Get all words' })
   @ApiResponse({
       status: 200,
       description: 'The found words',
       type: WordEntity,
       isArray: true
   })
   getAll(): Promise<wordI[]> {
       return this.wordsService.getAll();
   }

   @Get(':id')
   @ApiOperation({ summary: 'Get word by :id' })
   @ApiResponse({
       status: 200,
       description: 'The found word by id',
       type: WordEntity,
   })
   getById(@Param('id') id: string ): Promise<wordI> {
       return this.wordsService.getById(id);
   }

   @Post()
   @ApiOperation({ summary: 'Create word' })
   @ApiBody({
       type: CreateWordDto
   })
   @ApiResponse({
       status: 201,
       description: 'Created',
       type: WordEntity
   })
   @UsePipes(ValidationPipe)
   create(@Body() createWord: CreateWordDto) {
       return this.wordsService.create(createWord);
   }

   @Put(':id')
   @ApiOperation({ summary: 'Update word' })
   @ApiBody({
       type: UpdateWordDto
   })
   @ApiResponse({
       status: 200,
       description: 'Updated',
       type: WordEntity
   })
   update(@Body() updateWord: UpdateWordDto, @Param('id') id: string) {
       return this.wordsService.update(updateWord, id);
   }

   @Delete(':id')
   @ApiOperation({ summary: 'Delete word by :id' })
   @ApiResponse({
       status: 200,
       description: 'Deleted',
       type: WordEntity
   })
   removeWord(@Param('id') id: string) {
       return this.wordsService.remove(id);
   }
}
