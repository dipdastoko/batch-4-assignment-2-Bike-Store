import { Request, Response } from 'express';
import { prouductServices } from './products.services';
import { productsZodValidationSchema } from './products.validation';

const createABike = async (req: Request, res: Response) => {
  const date = new Date();
  try {
    const bikeData = req.body;
    const zodParsedProductData = productsZodValidationSchema.parse(bikeData);
    zodParsedProductData.createdAt = date.toISOString();
    zodParsedProductData.updatedAt = date.toISOString();
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
