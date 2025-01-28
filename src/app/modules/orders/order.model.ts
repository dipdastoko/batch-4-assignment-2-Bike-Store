import { model, Schema } from 'mongoose';
import { TOrders } from './orders.interface';

const OrderSchema = new Schema<TOrders>({
  email: {
    type: String,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: String,
    required: false,
  },
  updatedAt: {
    type: String,
    required: false,
  },
});

export const OrderModel = model('Orders', OrderSchema);
