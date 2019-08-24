import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
// const Float = require('mongoose-float').loadType(mongoose, 4);
const  Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    photoUrls: [{
        type: String,
        _id: false
    }],
    status: {
        type: String, 
        enum: []
    },
    category: {
        type: String
    }

},{
    timestamps: true
})

ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('product', ProductSchema);