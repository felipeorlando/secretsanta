import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import configs from './configs';
import Routes from './routes';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

mongoose.connect(`mongodb://${configs.db.host}/${configs.db.name}`);

new Routes(app).registerRoutes();

app.listen(PORT, () => {
  console.log(`Server running at http://${configs.app.host}:${configs.app.port}`);
});
