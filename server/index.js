import './common/env';
import Server from './common/server';
import routes from './routes';

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/x-commerce', { useFindAndModify: false }, (err) => {
  if (err) console.log (err)
  else console.log ("DB Connect Success !");
})

export default new Server()
  .router(routes)
  .listen(process.env.PORT);
