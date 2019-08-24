import UserService from '../../services/user.service';
import bcrypt from 'bcrypt'

class Controller {
    all (req, res) {
        UserService.all()
            .then ( r => {
                res.json(r);
            })
    }

    create (req, res) {
        const password = req.body.password;
        const hashPassword = bcrypt.hashSync(password, 15);
        req.body.password = hashPassword;
        UserService.create(req.body) 
            .then ( r => res
                .status(201)
                .location(`/api/v1/user`)
                .json(r))
            .catch(err => res.json(err)) ;
    }
    
    byId (req, res) {
        UserService.byId(req.params.id)
        .then( r => {
            if (r) res.json (r)
            else res.status(400).end();
        });
    }

    update (req,res) {
        UserService.update(req.params.id, req.body)
        .then (r => {
            console.log(r);
            res.status(201)
            .location(`/api/v1/user/${r.id}`)
            .json(r);
        })
            
    }

    delete (req,res) {
        UserService.delete(req.params.id)
        .then (r => 
            res.json(r)
        );
    }
    


}

export default new Controller();