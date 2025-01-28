import { Request, Response } from 'express';
import { OrderServices } from './order.services';
import { OrderValidationSchema } from './order.validation';
import { Types } from 'mongoose';

const orderABike = async (req: Request, res: Response) => {
  try {
    const orderedBikeData = req.body;
    const zodParsedData = OrderValidationSchema.parse(orderedBikeData);
    const transformedData = {
      ...zodParsedData,
      product: new Types.ObjectId(zodParsedData.product),
    };
    const result = await OrderServices.insertOrderedBikeIntoDB(transformedData);
    res.status(200).json({
      message: 'Order Created Successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      message: error.message,
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const OrderControllers = {
  orderABike,
};
