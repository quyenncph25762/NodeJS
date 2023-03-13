import express from "express";
const router = express.Router();
import { UpdateProduct, addProduct, getAllProducts, getOneProduct, patchProduct, removeProduct } from "../controllers/product"

router.get("/products", getAllProducts)

router.get("/products/:id", getOneProduct)

router.post("/products", addProduct)

router.put("/products/:id", UpdateProduct)

router.delete("/products/:id", removeProduct)

router.patch("/products/:id", patchProduct)

export default router