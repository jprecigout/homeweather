import { Document } from 'mongoose';

export interface DashItem extends Document {
  image: string;
  name: string;
  event: string;
  activate: boolean;
}
