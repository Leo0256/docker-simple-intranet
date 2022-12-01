import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Memo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    descr!: string;
}