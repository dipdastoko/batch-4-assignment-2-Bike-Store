import { model, Schema } from 'mongoose';
import { TProducts } from './products.interface';

const productsSchema = new Schema<TProducts>({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  createdAt: { type: String, required: false },
  updatedAt: { type: String, required: false },
});

export const ProductsModel = model<TProducts>('Products', productsSchema);
