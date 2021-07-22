import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculty } from 'src/models/faculty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty) private facultyRespository: Repository<Faculty>,
  ) {}

  async getAll(): Promise<Faculty[]> {
    return await this.facultyRespository.find();
  }

  async add(faculty: Faculty): Promise<void> {
    await this.facultyRespository.insert(faculty);
  }

  async edit(faculty: Faculty): Promise<void> {
    await this.facultyRespository.update(faculty.id, faculty);
  }

  async delete(faculty: Faculty): Promise<void> {
    await this.facultyRespository.delete(faculty.id);
  }

//   async insert(faculty: Faculty): Promise<Faculty> {
//     return await this.facultyRespository.insert(faculty);
//   }

}
