import mongoose from 'mongoose';
// const Float = require('mongoose-float').loadType(mongoose, 4);
const  Schema = mongoose.Schema;


const OrderSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    company: {
        type: String
    },
    country: {
        type: String
    },
    street: {
        type: String
    },
    postcode: {
        type: Number
    },
    city: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    listProduct: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'product' //link sang bang product
        },
        quantity: {
            type: Number
        },
        _id: false

    }],
    shipdate: {
        type: String
    },
    status: {
        type: String,
        enum:[],
        complete: Boolean
    }



},{
    timestamps: true
})

module.exports = mongoose.model('order', OrderSchema);