import { ObjectId } from 'mongoose';

export type TOrders = {
  email: string;
  product: ObjectId;
  qunatity: number;
  totalPrice: number;
};
