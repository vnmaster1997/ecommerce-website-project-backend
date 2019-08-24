import mongoose, { mongo } from 'mongoose';
import { strict } from 'assert';
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        dropDups: true 
    },

    firstName: {
        type: String
    },
    
    lastName: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },

    phone: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema);