import examplesRouter from './api/controllers/examples/router';
import productrouter from './api/controllers/product/router';
import userrouter from './api/controllers/user/router';
import orderrouter from './api/controllers/order/router';
import authrouter from './api/controllers/auth/router';
import imagerouter from './api/controllers/image/router';
import auth from './api/controllers/auth/controller';
import path from 'path';
import multer from 'multer';


var storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
  }


})


export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/product', productrouter)
  app.use('/api/v1/user', auth.checkAuth, userrouter);
  app.use('/api/v1/order', orderrouter);
  app.use('/api/v1/auth', authrouter);
  app.use('/api/v1/image', upload.array('file', 12), imagerouter);
}
