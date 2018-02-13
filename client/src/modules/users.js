import angular from 'angular';
import UsersController from '../controllers/users';
import listTemplate from "../templates/users.html";
import newTemplate from '../templates/users.new.html';
import editTemplate from '../templates/users.edit.html';

let usersModule = angular.module('app.users', []);

usersModule.controller('UsersController', UsersController);

usersModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('app.users', {
      url: '/users',
      controller: 'UsersController',
      controllerAs: '$usersCtrl',
      template: listTemplate,
      title: 'Users'
    })
    .state('app.usersNew', {
      url: '/users/new',
      controller: 'UsersController',
      controllerAs: '$usersCtrl',
      template: newTemplate,
      title: 'Users'
    })
    .state('app.usersEdit', {
      url: '/users/:id/edit',
      controller: 'UsersController',
      controllerAs: '$usersCtrl',
      template: editTemplate,
      title: 'Users'
    });
});

export default usersModule;
