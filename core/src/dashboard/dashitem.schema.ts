import * as mongoose from 'mongoose';

export const DashItemSchema = new mongoose.Schema({
  image: String,
  name: String,
  event: String,
  activate: Boolean,
});
