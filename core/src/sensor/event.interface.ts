import { Document } from 'mongoose';

export interface SensorEvent extends Document {
  name: string;
  value: number;
  date: Date;
}
