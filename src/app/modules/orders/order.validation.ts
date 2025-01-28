import z from 'zod';

export const OrderValidationSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  product: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid ObjectId'),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .positive('Quantity must be greater than 0'),
  totalPrice: z.number().positive('Total price must be greater than 0'),
  createdAt: z.optional(z.string()),
  updatedAt: z.optional(z.string()),
});
