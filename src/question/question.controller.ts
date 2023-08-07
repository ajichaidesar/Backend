import { Controller, Get, Body, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './entities/question.entity';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get()
  async getAllQuestions(): Promise<Question[]> {
    return this.questionService.getAllQuestions();
  }

  @Post()
  async createQuestion(@Body() data: Partial<Question>): Promise<Question> {
    return this.questionService.createQuestion(data);
  }
}
