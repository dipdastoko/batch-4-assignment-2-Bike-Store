import { TProducts } from './products.interface';
import { ProductsModel } from './products.model';

const createBikeIntoDB = async (bikeData: TProducts) => {
  const result = await ProductsModel.create(bikeData);
  return result;
};

export const prouductServices = {
  createBikeIntoDB,
};
