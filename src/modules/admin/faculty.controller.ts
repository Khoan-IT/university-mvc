import { Faculty } from 'src/models/faculty.entity';
import { FacultyService } from './../../services/faculty.service';
import { Controller, Get, Post, Render, Req, Res, Body } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('faculty')
export class FacultyController {
  constructor(private facultyService: FacultyService) {}

  @Get()
  @Render('faculty/index')
  async index() {
    return {
      facultyList: await this.facultyService.getAll(),
    };
  }

  @Post('/add')
  async add(@Res() res: Response, @Body() faculty: Faculty) {
    await this.facultyService.add(faculty);
    res.redirect('/faculty');
  }

  @Post('/edit')
  async edit(@Res() res: Response, @Body() faculty: Faculty) {
    await this.facultyService.edit(faculty);
    res.redirect('/faculty');
  }
}
