import express from 'express';
import { BikeControllers } from './products.controllers';
const ProductsRouters = express.Router();
ProductsRouters.post('/', BikeControllers.createABike);
export default ProductsRouters;
