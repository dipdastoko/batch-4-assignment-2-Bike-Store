import { OrderModel } from './order.model';
import { TOrders } from './orders.interface';

const insertOrderedBikeIntoDB = async (orderedBikeData: TOrders) => {
  const result = await OrderModel.create(orderedBikeData);
  return result;
};

export const OrderServices = {
  insertOrderedBikeIntoDB,
};
