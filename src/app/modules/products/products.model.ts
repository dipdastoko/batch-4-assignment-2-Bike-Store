import mongoose, { Schema } from 'mongoose'
import { TProducts } from './products.interface'

const productsSchema = new Schema<TProducts>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
})

export const ProductsModel = mongoose.model('Product', productsSchema)
