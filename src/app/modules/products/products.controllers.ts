import { Request, Response } from 'express';
import { prouductServices } from './products.services';
import { productsSchema } from './products.validation';

const createABike = async (req: Request, res: Response) => {
  try {
    const bikeData = req.body;
    const zodParsedProductData = productsSchema.parse(bikeData);
    const result =
      await prouductServices.createBikeIntoDB(zodParsedProductData);
    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || 'Something went wrong!',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const BikeControllers = {
  createABike,
};
