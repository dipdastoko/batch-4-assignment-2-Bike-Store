import express from 'express';
import { OrderControllers } from './order.controller';
const orderRouters = express.Router();
orderRouters.post('/', OrderControllers.orderABike);
orderRouters.get('/revenue', OrderControllers.calculateTotalRevenue);

export default orderRouters;
