import { Router } from "express";
import { uploader } from "../../utils.js";
import { uploadProducts } from "../controller/productsController.js";


const router = Router();

router.post('/add',uploader.single('thumbnail'),uploadProducts);

export default router;