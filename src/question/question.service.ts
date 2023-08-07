import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async getAllQuestions(): Promise<Question[]> {
    return this.questionRepository.find();
  }

  async createQuestion(data: Partial<Question>): Promise<Question> {
    const question = this.questionRepository.create(data);
    return this.questionRepository.save(question);
  }
}
