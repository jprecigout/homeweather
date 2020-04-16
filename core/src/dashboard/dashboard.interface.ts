import { Document, Types } from 'mongoose';
import { DashItem } from './dashitem.interface';

export interface Dashboard extends Document {
  userId: Types.ObjectId;
  dashItems: [DashItem];
}
