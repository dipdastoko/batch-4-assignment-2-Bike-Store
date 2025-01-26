import z from 'zod';

export const productsSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  productId: z.number().int().positive('Product ID must be a positive integer'),
  brand: z.string().min(1, 'Brand is required'),
  price: z.number().positive('Price must be a positive number'),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().int().min(0, 'Quantity must be a non-negative integer'),
  inStock: z.boolean(),
});
