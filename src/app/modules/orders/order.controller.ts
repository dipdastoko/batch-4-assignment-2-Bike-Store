import { Request, Response } from 'express';
import { OrderServices } from './order.services';
import { OrderValidationSchema } from './order.validation';
import { Types } from 'mongoose';

const date = new Date();

const orderABike = async (req: Request, res: Response) => {
  try {
    const orderedBikeData = req.body;
    const zodParsedData = OrderValidationSchema.parse(orderedBikeData);

    //prdouctId comes as string, so we need to transform it into ObjectId
    const transformedData = {
      ...zodParsedData,
      product: new Types.ObjectId(zodParsedData.product),
    };

    transformedData.createdAt = date.toISOString();
    transformedData.updatedAt = date.toISOString();

    const result = await OrderServices.insertOrderedBikeIntoDB(transformedData);
    res.status(200).json({
      message: 'Order Created Successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

const calculateTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.calculateRevenueFromOrders();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      messsage: error.message,
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const OrderControllers = {
  orderABike,
  calculateTotalRevenue,
};
