import express from 'express';
import { BikeControllers } from './products.controllers';
const ProductsRouters = express.Router();
ProductsRouters.post('/', BikeControllers.createABike);
ProductsRouters.get('/', BikeControllers.getAllBikes);
ProductsRouters.get('/:productId', BikeControllers.getASpecificBike);
export default ProductsRouters;
