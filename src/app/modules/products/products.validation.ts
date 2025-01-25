import z from 'zod';

const productsValidationSchema = z.object({
  name: z.string(),
  brand: z.string(),
  price: z.number(),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
  description: z.string(),
  quantity: z.number(),
  inStock: z.boolean(),
});

export default productsValidationSchema;
