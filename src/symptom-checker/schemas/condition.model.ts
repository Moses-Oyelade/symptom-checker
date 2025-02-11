import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Condition extends Document {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: [String] })
  symptoms: string[];

  @Prop({ required: true })
  severity: string;

  @Prop({ required: true })
  recommendation: string;
}

export const ConditionSchema = SchemaFactory.createForClass(Condition);
