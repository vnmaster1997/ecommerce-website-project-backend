import mongoose from 'mongoose';
// const Float = require('mongoose-float').loadType(mongoose, 4);
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
    name: {
        type: String
    },

},{
    timestamps: true
});

module.exports = mongoose.model('category', CategorySchema);