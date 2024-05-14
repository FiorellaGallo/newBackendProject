import ProductMananger from "../mananger/product.js";
import config from "../config/config.js";

export const uploadProducts = ('/', async (req,res)=>{
    const productMananger = new ProductMananger;
    const data = req.body;
    const img = `http://${config.imgUrl}/${req.file.path.replace('public/','')}`;
    data.thumbnail = img;
    console.log(req.body);
    if(!data) return res.status(404).send('No product loaded');
    const product = await productMananger.addProduct(data);
    res.send(product);
})