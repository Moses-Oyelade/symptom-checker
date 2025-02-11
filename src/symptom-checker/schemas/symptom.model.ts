import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Symptom extends Document {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: [String] })
  related_conditions: string[];
}

export const SymptomSchema = SchemaFactory.createForClass(Symptom);
