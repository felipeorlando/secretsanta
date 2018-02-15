import angular from 'angular';
import HomeController from '../controllers/home';
import template from '../templates/home.html';

let homeModule = angular.module('app.home', []);

homeModule.controller('HomeController', HomeController);

homeModule.config(($stateProvider) => {
  'ngInject';

  const resolve = {
    auth: (AuthService) => AuthService.ensureAuthIs(true)
  };

  $stateProvider.state('app.home', {
    url: '/',
    controller: 'HomeController',
    controllerAs: '$ctrl',
    template,
    title: 'Home',
    resolve,
  });
});

export default homeModule;
