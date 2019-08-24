import ProductService from '../../services/product.service';

class Controller {
    all (req, res) {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10; 
        const category = req.query.category;
        const status = req.query.status;
        const tags = req.query.tags;
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        ProductService.all(Number(page), Number(limit), category, status, tags, Number(minPrice), Number(maxPrice) )
            .then ( r => {
                res.json ({data: r.docs, total: r.total});
            })
    }

    create (req, res) {
        ProductService.create(req.body) 
            .then ( r => res
                .status(201)
                .location(`/api/v1/product`)
                .json(r));
    }
    
    byId (req, res) {
        ProductService.byId(req.params.id)
        .then( r => {
            if (r) res.json (r)
            else res.status(400).end();
        });
    }

    update (req,res) {
        ProductService.update(req.params.id, req.body)
        .then (r => {
            console.log(r);
            res.status(201)
            .location(`/api/v1/product/${r.id}`)
            .json(r);
        })
            
    }

    delete (req,res) {
        ProductService.delete(req.params.id)
        .then (r => 
            res.json(r)
        );
    }


}

export default new Controller();