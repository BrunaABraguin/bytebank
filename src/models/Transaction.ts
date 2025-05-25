import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  type: "depósito" | "transferência" | "pagamento" | "saque";
  amount: number;
  date: Date;
  description?: string;
}

const TransactionSchema: Schema = new Schema(
  {
    type: {
      type: String,
      enum: ["depósito", "transferência", "pagamento", "saque"],
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
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Transaction ||
  mongoose.model<ITransaction>("Transaction", TransactionSchema);
