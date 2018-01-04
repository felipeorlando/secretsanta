import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import Routes from './routes';

const PORT = 8888;
const HOST_NAME = 'localhost';
const DATABASE_NAME = 'shoppingList';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

mongoose.connect(`mongodb://${HOST_NAME}/${DATABASE_NAME}`);

new Routes(app).registerRoutes();

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}`);
});
