import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Faculty {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    establishedYear: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}