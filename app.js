import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import Passport from './configs/passport';
import configs from './configs';
import Jobs from './lib/jobs';
import Routes from './routes';
import HttpErrorHelper from './lib/http-error-helper';
import Mailer from './lib/mailer';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(`mongodb://${configs.db.host}/${configs.db.name}`);

Jobs.init();

Passport.init();

Routes.init(app);

HttpErrorHelper.init(app);

new Mailer().send();

app.listen(configs.app.port, () => {
  console.log(`Server running at http://${configs.app.host}:${configs.app.port}`);
});
