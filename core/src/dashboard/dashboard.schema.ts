import { Schema, Types } from 'mongoose';
import { DashItemSchema } from './dashitem.schema';

export const DashboardSchema = new Schema({
  userId: Types.ObjectId,
  dashItems: [DashItemSchema],
});
