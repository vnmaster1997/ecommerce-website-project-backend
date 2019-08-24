const AuthenModel = require ('../model/user');

class AuthService {
    //get all authentication
    all() {
        return AuthenModel.find({})
    }
    //login user
    login(username, password) {
        return AuthenModel.findOne({username})
    }


}
export default new AuthService();