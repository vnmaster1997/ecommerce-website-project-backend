import l from '../../common/logger';
const UserModel = require ('../model/user');

class UserService {
    //get all list user
    all() {
        return UserModel.find({});
    }
    //find a user by id
    byId(id) {
        return UserModel.findById({_id: id});
    }
    //add a new user 
    create(user) {
        return new UserModel(user).save();
    }

    //update a user by id
    update(id, user) {
        return UserModel.findOneAndUpdate({_id: id}, user, {new: true});
    }
    
    //delete a user by id
    delete(id) {
        return UserModel.deleteOne({_id: id});
    }



}

export default new UserService();