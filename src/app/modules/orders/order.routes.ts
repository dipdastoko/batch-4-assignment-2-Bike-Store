import express from 'express';
import { OrderControllers } from './order.controller';
const orderRouters = express.Router();
orderRouters.post('/', OrderControllers.orderABike);

export default orderRouters;
