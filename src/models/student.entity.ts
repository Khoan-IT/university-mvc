import { Faculty } from './faculty.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  familyName: string;

  @Column({ nullable: false })
  givenName: string;

  @Column()
  birthDay: Date;

  @Column()
  hometown: string;

  @Column()
  gender: boolean;

  @ManyToOne(() => Faculty)
  @JoinTable()
  faculty: Faculty;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
