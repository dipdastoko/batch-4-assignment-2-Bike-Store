import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import ProductsRouters from './app/modules/products/products.routes';
import orderRouters from './app/modules/orders/order.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductsRouters);
app.use('/api/orders/', orderRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
