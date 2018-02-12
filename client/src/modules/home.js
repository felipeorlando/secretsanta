import angular from 'angular';
import HomeController from '../controllers/home';
import template from '../templates/home.html';

let homeModule = angular.module('app.home', []);

homeModule.controller('HomeController', HomeController);

homeModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider.state('app.home', {
    url: '/',
    controller: 'HomeController',
    controllerAs: '$ctrl',
    template,
    title: 'Home'
  });
});

export default homeModule;
