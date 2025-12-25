import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController.js';

const productRouter = Router();

//GET products
productRouter.get('/products', getAllProducts);

// GET /products/:productId;
productRouter.get('/products/:productId', getProductById);

//POST /products
productRouter.post('/products', createProduct);

//PATCH /products/productId
productRouter.patch('/products/:productId', updateProduct);

//DELETE /products/productId
productRouter.delete('/products/:productId', deleteProduct);

export default productRouter;
