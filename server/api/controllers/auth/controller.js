import AuthenService from '../../services/authen.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { PassThrough } from 'stream';

class Controller {
    all (req, res) {
        AuthenService.all()
            .then ( r => {
                res.json (r);
            })
    }

    login (req, res) {
        const username = req.body.username;
        const password = req.body.password;
        AuthenService.login(username, password) 
            .then (r => {
                bcrypt.compareSync(password, r.password);
                if(!r) res.json({message: 'User not exist'}); 
                
                else if (bcrypt.compareSync(password, r.password)) {
                    // res.json(r);
                    const token = jwt.sign({r}, 'shhhhh');
                    res.json({token});
                } else {
                    res.json({err: "Fail !!"})
                }
                console.log (r);

            })
                // .status(201)
                // .location(`/api/v1/product`)
                // .json(r));
    }

    checkAuth(req, res, next) {
        const token = req.query.token || req.headers.token;
        if (!token) {
            res.json({message:"dmm"})
        }
        const r = jwt.verify(token, 'shhhhh')
        if (r) {
            req.user = r
            next();
        } else {
            res.json({message: "dmm"})
        }

    } 

    

}

export default new Controller();