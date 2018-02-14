import './assets/stylesheets/main.scss';

import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-ui-router';

import AppConstants from './config/app.constants';
import AppConfig from './config/app.config';
import AppRun from './config/app.run';

import './layout';
import './services';
import './modules/home';
import './modules/auth';
import './modules/users';
import './modules/persons';

const requires = [
  'ui.router',
  'ngMaterial',
  'app.layout',
  'app.home',
  'app.auth',
  'app.users',
  'app.persons',
  'app.services',
];

angular
  .module('app', requires)
  .constant('AppConstants', AppConstants)
  .config(AppConfig)
  .run(AppRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
