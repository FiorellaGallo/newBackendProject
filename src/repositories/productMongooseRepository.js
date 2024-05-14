import Product from "../entities/products.js";
import { productModel } from "../model/product.model.js";

class ProductMongooseRepository{

    async createProduct(product){
        const document = await productModel.create(product);
        return new Product ({
            id: document._id,
            title: document.title,
            description: document.description,
            price: document.price,
            thumbnail: document.thumbnail,
            code: document.code,
            stock: document.stock,
            category: document.category

        });
    };


}

export default ProductMongooseRepository;