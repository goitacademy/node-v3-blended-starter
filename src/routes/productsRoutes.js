import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/productsController.js";

const router = Router();

router.get("/products", getAllProducts);
router.get('/products/:productId', getProductById);
router.post('/products', createProduct);
router.patch('/products/:productId', updateProduct);
router.delete('/products/:productId', deleteProduct);

export default router;
