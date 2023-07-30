// src/question.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Questions } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Questions)
    private questionRepository: Repository<Questions>,
  ) {}

  async findAll(): Promise<Questions[]> {
    return this.questionRepository.find();
  }

  
}
