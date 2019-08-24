import ExamplesService from '../../services/examples.service';

export class Controller {
//   all(req, res) {
//     ExamplesService.all()
//       .then(r => res.json(r));
//   }
    upload(req,res) {
        console.log (req.files);
        const urls = req.files.map(el => `uploads/${el.filename}`)
        res.json({urlImage: urls})
    }

}


export default new Controller();
