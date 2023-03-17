import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
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

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}