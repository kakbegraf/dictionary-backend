import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class WordEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        name: 'word',
        nullable: false,
        default: '',
    })
    word: string;


    @Column({
        name: 'translation',
        nullable: false,
        default: '',
    })
    translation: string;
}