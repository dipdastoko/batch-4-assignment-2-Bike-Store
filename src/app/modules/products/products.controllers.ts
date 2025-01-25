import { Request, Response } from 'express';
import { prouductServices } from './products.services';

const createABike = async (req: Request, res: Response) => {
  try {
    const bikeData = req.body;
    const result = await prouductServices.createBikeIntoDB(bikeData);
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
