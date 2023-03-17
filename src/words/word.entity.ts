import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class WordEntity {
    @PrimaryGeneratedColumn("uuid")
    @ApiProperty({example: '1', description: 'UUID'})
    id: string;

    @Column({
        name: 'word',
        nullable: false,
        default: '',
    })
    @ApiProperty({example: 'Hi', description: 'English word'})
    word: string;

    @Column({
        name: 'translation',
        nullable: false,
        default: '',
    })
    @ApiProperty({example: 'Првиет', description: 'Translated word'})
    translation: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    @ApiProperty({example: new Date().getTime(), description: 'created_at'})
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    @ApiProperty({example: new Date().getTime(), description: 'updated_at'})
    public updated_at: Date;
}