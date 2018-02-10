import angular from 'angular';

import 'angular-ui-router';

import AppConstants from './config/app.constants';
import AppConfig from './config/app.config';
import AppRun from './config/app.run';

import './layout';
import './modules/home';
import './modules/login';

const requires = [
  'ui.router',
  'app.layout',
  'app.home',
  'app.login',
];

angular
  .module('app', requires)
  .constant('AppConstants', AppConstants)
  .config(AppConfig)
  .run(AppRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});

// import angular from 'angular';
// import uiRouter from 'angular-ui-router';
// // import Common from './common/common';
// // import Components from './components/components';
// import appComponent from './layout/component';
// // import 'normalize.css';

// angular.module('app', [
//     uiRouter,
//     // Common,
//     // Components
//   ])
//   .config(($locationProvider) => {
//     'ngInject';
//     // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
//     // #how-to-configure-your-server-to-work-with-html5mode
//     $locationProvider.html5Mode(true).hashPrefix('!');
//   })

//   .component('app', appComponent);
