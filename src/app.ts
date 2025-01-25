import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import ProductsRouters from './app/modules/products/products.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductsRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
