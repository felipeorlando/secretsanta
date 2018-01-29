import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import fs from 'fs';
import Handlebars from 'handlebars';
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

const source = fs.readFileSync('./public/templates/matcher.html', 'utf8');
const template = Handlebars.compile(source);

const result = template({
  name: 'Felipe',
  friend: 'Maria',
});

Mailer.send({
  to: 'fobsouza@gmail.com',
  subject: 'Yo!',
  html: result,
});

app.listen(configs.app.port, () => {
  console.log(`Server running at http://${configs.app.host}:${configs.app.port}`);
});
