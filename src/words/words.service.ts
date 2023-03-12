import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { WordEntity } from './word.entity';
import { wordI } from './interface/interfaces';
import { CreateWordDto } from "./dto/create-word.dto";
import { UpdateWordDto } from "./dto/update-word.dto";

@Injectable()
export class WordsService {
    constructor(
        @InjectRepository(WordEntity) private readonly wordRepository: Repository<wordI>,
    ) {}
    private words: Array<wordI> = []

    getAll(): Promise<wordI[]> {
        return this.wordRepository.find();
    }

    getById(id: string): Promise<wordI> {
        const option = {
            where: {
                id: id,
            },
        }
        return this.wordRepository.findOne(option);
    }

    create(wordDto: CreateWordDto) {
        const word: wordI = this.wordRepository.create(wordDto);
        return this.wordRepository.save(word);
    }

    async update(wordDto: UpdateWordDto, id: string) {
        const option = {
            where: {
                id: id,
            },
        }
        let word: wordI = await this.wordRepository.findOne(option);
        word.word = wordDto.word;
        word.translation = wordDto.translation;
        return this.wordRepository.save(word);
    }

    remove(id: string) {
        return this.wordRepository.createQueryBuilder('Word')
            .delete()
            .from(WordEntity)
            .where("id = :id", { id: id })
            .execute();
    }
}