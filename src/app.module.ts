import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SymptomModule } from './symptom/symptom.module';
import { ConditionModule } from './condition/condition.module';

@Module({
  imports: [SymptomModule, ConditionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
