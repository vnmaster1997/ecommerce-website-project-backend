import OrderService from '../../services/order.service';

class Controller {
    all (req, res) {
        OrderService.all()
            .then ( r => {
                res.json (r);
            })
    }

    create (req, res) {
        OrderService.create(req.body) 
            .then ( r => res
                .status(201)
                .location(`/api/v1/order`)
                .json(r));
    }
    
    byId (req, res) {
        OrderService.byId(req.params.id)
        .then( r => {
            if (r) res.json (r)
            else res.status(400).end();
        });
    }


    delete (req,res) {
        OrderService.delete(req.params.id)
        .then (r => 
            res.json(r)
        );
    }


}

export default new Controller();