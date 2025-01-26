import { TProducts } from './products.interface';
import { ProductsModel } from './products.model';

const createBikeIntoDB = async (bikeData: TProducts) => {
  const result = await ProductsModel.create(bikeData);
  return result;
};

const getAllBikesfromDB = async () => {
  const result = await ProductsModel.find();
  return result;
};

const getASpecificBike = async (bikeId: string) => {
  const result = await ProductsModel.findById(bikeId);
  return result;
};

export const prouductServices = {
  createBikeIntoDB,
  getAllBikesfromDB,
  getASpecificBike,
};
