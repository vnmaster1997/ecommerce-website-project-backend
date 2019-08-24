import l from '../../common/logger';
const OrderModel = require ('../model/order');

class OrderService {
    //get all order
    all() {
        return OrderModel.find({});
    }
    //find a order by id
    byId(id) {
        return OrderModel.findById({_id: id}).populate("listProduct.productId");
    }

    //add a new order
    create(order) {
        return new OrderModel(order).save();
    }

    
    //delete a order by id
    delete(id) {
        return OrderModel.deleteOne({_id: id});
    }




}

export default new OrderService();