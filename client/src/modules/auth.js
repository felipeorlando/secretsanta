import angular from 'angular';

import AuthLoginController from '../controllers/auth/login';
import template from '../templates/login.html';

let authModule = angular.module('app.auth', []);

authModule.controller('AuthLoginController', AuthLoginController);

authModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('app.authLogin', {
      url: '/login',
      controller: 'AuthLoginController',
      controllerAs: '$authCtrl',
      title: 'Login',
      template,
    })
    .state('app.authLogout', {
      url: '/logout',
      title: 'Logout',
      redirectTo: 'app.authLogin',
    });
});

export default authModule;
