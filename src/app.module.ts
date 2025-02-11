import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SymptomCheckerModule } from './symptom-checker/symptom-checker.module';

@Module({
  imports: [SymptomCheckerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
