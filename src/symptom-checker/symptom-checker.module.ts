import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SymptomCheckerService } from './symptom-checker.service';
import { SymptomCheckerController } from './symptom-checker.controller';
import { Symptom, SymptomSchema } from './schemas/symptom.model';
import { Condition, ConditionSchema } from './schemas/condition.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Symptom.name, schema: SymptomSchema },
      { name: Condition.name, schema: ConditionSchema },
    ]),
  ],
  controllers: [SymptomCheckerController],
  providers: [SymptomCheckerService],
})
export class SymptomCheckerModule {}
