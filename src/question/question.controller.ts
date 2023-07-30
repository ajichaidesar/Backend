import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Questions } from './entities/question.entity';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async findAll(): Promise<Questions[]> {
    return this.questionService.findAll();
  }

  
}
