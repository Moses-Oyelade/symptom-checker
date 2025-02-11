import { Controller, Post, Body } from '@nestjs/common';
import { SymptomCheckerService } from './symptom-checker.service';

@Controller('symptom-checker')
export class SymptomCheckerController {
  constructor(private readonly symptomCheckerService: SymptomCheckerService) {}

  @Post('check')
  async checkSymptoms(@Body('symptoms') symptoms: string[]) {
    return this.symptomCheckerService.checkSymptoms(symptoms);
  }
}

