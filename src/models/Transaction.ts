import { TransactionEnum } from "@/types";
import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  type: TransactionEnum;
  amount: number;
  date: Date;
}

const TransactionSchema: Schema = new Schema(
  {
    type: {
      type: String,
      enum: Object.values(TransactionEnum),
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Transaction ||
  mongoose.model<ITransaction>("Transaction", TransactionSchema);
