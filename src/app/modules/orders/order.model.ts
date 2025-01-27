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
  qunatity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const OrderModel = model('Orders', OrderSchema);
export default OrderModel;
