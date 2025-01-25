import { Request, Response } from 'express';
import { prouductServices } from './products.services';

const createABike = async (req: Request, res: Response) => {
  const bikeData = req.body;
  const result = await prouductServices.createBikeIntoDB(bikeData);
  res.send(200).json({
    message: 'Bike created successfully',
    success: true,
    data: result,
  });
};

export const BikeControllers = {
  createABike,
};
