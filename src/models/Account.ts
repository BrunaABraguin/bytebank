import mongoose, { Schema, Document, Types } from "mongoose";

export interface IAccount extends Document {
  ownerName: string;
  balance: number;
  transactions: Types.ObjectId[];
}

const AccountSchema: Schema = new Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    transactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Account ||
  mongoose.model<IAccount>("Account", AccountSchema);
