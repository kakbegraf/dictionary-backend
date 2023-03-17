import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {FindManyOptions, Repository} from 'typeorm';

import { WordEntity } from './word.entity';
import { wordI } from './interface/interfaces';
import { CreateWordDto } from "./dto/create-word.dto";
import { UpdateWordDto } from "./dto/update-word.dto";

@Injectable()
export class WordsService {
    constructor(
        @InjectRepository(WordEntity) private readonly wordRepository: Repository<wordI>,
    ) {}

    getAll(): Promise<wordI[]> {
        let options: FindManyOptions = {
            order: {
                created_at: 'asc'
            }
        }
        return this.wordRepository.find(options);
    }

    getById(id: string): Promise<wordI> {
        const options = {
            where: {
                id,
            },
        }
        return this.wordRepository.findOne(options);
    }

    create(wordDto: CreateWordDto) {
        const word: wordI = this.wordRepository.create(wordDto);
        return this.wordRepository.save(word);
    }

    async update(wordDto: UpdateWordDto, id: string) {
        await this.wordRepository.update(id, wordDto);
        const options = {
            where: {
                id,
            },
        }
        return await this.wordRepository.findOne(options);
    }

    remove(id: string) {
        return this.wordRepository.createQueryBuilder('Word')
            .delete()
            .from(WordEntity)
            .where("id = :id", { id: id })
            .execute();
    }
}
