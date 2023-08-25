import express from "express";
import { delProduct, product } from "../controllers/product.js";
import { getProduct } from "../controllers/product.js";
const router = express.Router()

router.post("/product", product)
router.get("/getProduct", getProduct )
router.delete("/delProduct/:product_id", delProduct)
export default router;