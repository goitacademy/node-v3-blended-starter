import { Schema, model } from 'mongoose';

const productShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['books', 'electronics', 'clothing', 'other'],
      required: true,
      default: 'other',
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model('Product', productShema);
