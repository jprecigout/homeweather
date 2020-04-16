import { Schema } from 'mongoose';

export const EventSchema = new Schema({
  name: String,
  value: Number,
  date: Date,
});
