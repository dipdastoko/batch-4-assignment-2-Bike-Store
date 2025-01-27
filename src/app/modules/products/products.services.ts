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

const updateABike = async (bikeId: string, updateProperties: object) => {
  // const result = await ProductsModel.findById(bikeId);
  // const filter = { name: 'Road Bike' };
  // const update = { price: 100, quantity: 500 };
  // const result = await ProductsModel.findOneAndUpdate(filter, update);
  const result = await ProductsModel.findByIdAndUpdate(
    bikeId,
    updateProperties,
    { returnDocument: 'after' },
  );
  return result;
};

export const prouductServices = {
  createBikeIntoDB,
  getAllBikesfromDB,
  getASpecificBike,
  updateABike,
};
