import angular from 'angular';

let homeModule = angular.module('app.login', []);

homeModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider.state('app.login', {
    url: '/login',
    title: 'Login',
    redirectTo: 'app.home',
  })
});

export default homeModule;
