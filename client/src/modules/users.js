import angular from 'angular';

import UsersController from '../controllers/users';
import UserNewController from '../controllers/users/new';
import UsersEditController from '../controllers/users/edit';

import listTemplate from '../templates/users.html';
import newTemplate from '../templates/users.new.html';
import editTemplate from '../templates/users.edit.html';

let usersModule = angular.module('app.users', []);

usersModule.controller('UsersController', UsersController);
usersModule.controller('UserNewController', UserNewController);
usersModule.controller('UsersEditController', UsersEditController);

usersModule.config(($stateProvider) => {
  'ngInject';

  const resolve = {
    auth: (AuthService) => AuthService.ensureAuthIs(true)
  };

  $stateProvider
    .state('app.users', {
      url: '/users',
      controller: 'UsersController',
      controllerAs: '$usersCtrl',
      template: listTemplate,
      title: 'Users',
      resolve
    })
    .state('app.usersNew', {
      url: '/users/new',
      controller: 'UserNewController',
      controllerAs: '$userCtrl',
      template: newTemplate,
      title: 'Create User',
      // resolve
    })
    .state('app.usersEdit', {
      url: '/users/:id/edit',
      controller: 'UsersEditController',
      controllerAs: '$userCtrl',
      template: editTemplate,
      title: 'Edit User',
      resolve
    });
});

export default usersModule;
