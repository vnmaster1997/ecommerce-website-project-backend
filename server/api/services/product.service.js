import l from '../../common/logger';
const ProductModel = require ('../model/product');

class ProductService {
    //get all list product
    all(page, limit, category, status, tags, minPrice, maxPrice ) {
        const query = {}
        if (category) {
              query.category = category
        } 
        if (status) {
            query.status = status
        } 
        if (tags) {
            query.tags = tags
        }
        if(minPrice && maxPrice) {
            query.price = {$gte: minPrice, $lte: maxPrice}
        }
        console.log (query);
        return ProductModel.paginate(query, {page, limit});
    }
    //find a product by id111
    byId(id) {
        return ProductModel.findById({_id: id});
    }
    //add a new product 
    create(product) {
        return new ProductModel(product).save();
    }

    //update a product by id
    update(id, product) {
        return ProductModel.findOneAndUpdate({_id: id}, product, {new: true});
    }
    
    //delete a product by id
    delete(id) {
        return ProductModel.deleteOne({_id: id});
    }



}

export default new ProductService();