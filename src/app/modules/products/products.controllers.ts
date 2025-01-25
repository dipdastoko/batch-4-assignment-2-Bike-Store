import { Request, Response } from 'express';
import { prouductServices } from './products.services';
import productsValidationSchema from './products.validation';

const createABike = async (req: Request, res: Response) => {
  try {
    const bikeData = req.body;
    const zodParsedProductData = productsValidationSchema.parse(bikeData);
    const result =
      await prouductServices.createBikeIntoDB(zodParsedProductData);
    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      success: false,
      data: error,
    });
  }
};

export const BikeControllers = {
  createABike,
};
