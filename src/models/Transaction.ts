import { TransactionEnum } from "@/types";
import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  type: TransactionEnum;
  amount: number;
  date: Date;
  accountId: string;
}

const TransactionSchema: Schema = new Schema(
  {
    accountId: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true
    },
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
