import { Types } from 'mongoose';

export type TOrders = {
  email: string;
  product: Types.ObjectId;
  qunatity: number;
  totalPrice: number;
};
