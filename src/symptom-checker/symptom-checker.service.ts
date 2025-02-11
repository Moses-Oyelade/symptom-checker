import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Symptom } from './schemas/symptom.model';
import { Condition } from './schemas/condition.model';

@Injectable()
export class SymptomCheckerService {
  constructor(
    @InjectModel('Symptom') private readonly symptomModel: Model<Symptom>,
    @InjectModel('Condition') private readonly conditionModel: Model<Condition>,
  ) {}

  async checkSymptoms(userSymptoms: string[]): Promise<any> {
    // Find matching conditions based on symptoms
    const conditions = await this.conditionModel.find({
      symptoms: { $in: userSymptoms },
    });

    if (conditions.length === 0) {
      return { message: 'No matching conditions found. Please consult a doctor.' };
    }

    // Format the response
    return conditions.map((condition: { name: any; severity: any; recommendation: any; }) => ({
      name: condition.name,
      severity: condition.severity,
      recommendation: condition.recommendation,
    }));
  }
}

