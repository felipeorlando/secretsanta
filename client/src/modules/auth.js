import angular from 'angular';

let authModule = angular.module('app.auth', []);

authModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('app.authLogin', {
      url: '/login',
      title: 'Login',
      redirectTo: 'app.home',
    })
    .state('app.authLogout', {
      url: '/logout',
      title: 'Logout',
      redirectTo: 'app.home',
    });
});

export default authModule;
