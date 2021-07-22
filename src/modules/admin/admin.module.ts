import { Faculty } from 'src/models/faculty.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyService } from './../../services/faculty.service';
import { StudentController } from './student.controller';
import { FacultyController } from './faculty.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Faculty])],
  providers: [FacultyService],
  controllers: [FacultyController, StudentController],
})
export class AdminModule {}
