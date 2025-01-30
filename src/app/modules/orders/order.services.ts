import { TProducts } from '../products/products.interface';
import { ProductsModel } from '../products/products.model';
import { OrderModel } from './order.model';
import { TOrders } from './orders.interface';

const insertOrderedBikeIntoDB = async (orderedBikeData: TOrders) => {
  const productDocument: TProducts | null = await ProductsModel.findById(
    //get the product document from Products collection which is ordered
    orderedBikeData.product,
  );

  //order quantity and available products quantity of ordered product
  const orderedQuantity = orderedBikeData.quantity;
  let availableQuantity;
  if (productDocument != null) {
    availableQuantity = productDocument.quantity;
  }

  if (availableQuantity != null) {
    if (availableQuantity >= orderedQuantity) {
      const result = await OrderModel.create(orderedBikeData); //store the order in database

      const productUpdatedQuantity = availableQuantity - orderedQuantity; //remaing quantity in Products collection after placing the order

      // update new quantity in Products collection
      await ProductsModel.updateOne(
        { _id: orderedBikeData.product },
        { quantity: productUpdatedQuantity },
      );

      //update the inStock proerty in Products collection if the new available quatity is 0
      if (productUpdatedQuantity == 0) {
        await ProductsModel.updateOne(
          { _id: orderedBikeData.product },
          { inStock: false },
        );
      }
      return result;
    } else {
      throw new Error(
        `Ordered quantity ${orderedQuantity} is greater than available Quantity ${availableQuantity}`,
      );
    }
  } else {
    throw new Error('Ordered quantity must be a valid number');
  }
};

const calculateRevenueFromOrders = async () => {
  const result = await OrderModel.aggregate([
    // stage-1
    {
      $project: {
        inidvidualOrderRevenue: { $multiply: ['$quantity', '$totalPrice'] },
      },
    },
    // stage-2
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$inidvidualOrderRevenue' },
      },
    },
    // stage-3
    { $project: { _id: 0, totalRevenue: 1 } },
  ]);
  return result[0];
};

export const OrderServices = {
  insertOrderedBikeIntoDB,
  calculateRevenueFromOrders,
};
