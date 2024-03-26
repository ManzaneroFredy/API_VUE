import Express from "express";
import {showProduct, showProductById, createProduct, updateProduct, deleteProduct} from '../controllers/Product.js'

const router = Express.Router();

router.get('/products', showProduct);
router.get('/products/:id', showProductById);  
router.post('/products', createProduct);  
router.put('/products/:id', updateProduct);  
router.delete('/products/:id', deleteProduct);  

export default router;
