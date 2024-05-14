import ProductMongooseRepository from "../repositories/productMongooseRepository.js";

class ProductMananger{
    constructor(){
        this.product = new ProductMongooseRepository();
    }

    async addProduct (newProduct){
    if (!newProduct.title || newProduct.title.trim().length === 0)
      throw Error("Empty title field");

    if (!newProduct.description || newProduct.description.trim().length === 0)
      throw Error("Empty description field");

    if (!newProduct.price) throw Error("Empty price field");

    if (!newProduct.thumbnail || newProduct.thumbnail.trim().length === 0)
      throw Error("Empty thumbnail field");
      
    if (!newProduct.code || newProduct.code.trim().length === 0)
      throw Error("Empty code field");

    if (!newProduct.stock) throw Error("Empty stock field");

    if (!newProduct.category || newProduct.category.trim().length === 0)
      throw Error("Empty category field");
    
    return await this.product.createProduct({
      ...newProduct,
      status: true,
    });
    }
}
export default ProductMananger;