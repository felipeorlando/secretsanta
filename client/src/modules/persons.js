import angular from 'angular';

import PersonsController from '../controllers/persons';
import PersonNewController from '../controllers/persons/new';
import PersonEditController from '../controllers/persons/edit';

import listTemplate from '../templates/persons.html';
import newTemplate from "../templates/persons.new.html";
import editTemplate from '../templates/persons.edit.html';

let personsModule = angular.module('app.persons', []);

personsModule.controller('PersonsController', PersonsController);
personsModule.controller('PersonNewController', PersonNewController);
personsModule.controller('PersonEditController', PersonEditController);

personsModule.config(($stateProvider) => {
  'ngInject';

  const resolve = {
    auth: (AuthService) => AuthService.ensureAuthIs(true)
  };

  $stateProvider
    .state('app.persons', {
      url: '/persons',
      controller: 'PersonsController',
      controllerAs: '$personsCtrl',
      template: listTemplate,
      title: 'Persons',
      resolve,
    })
    .state('app.personsNew', {
      url: '/persons/new',
      controller: 'PersonNewController',
      controllerAs: '$personCtrl',
      template: newTemplate,
      title: 'Persons',
      resolve,
    })
    .state('app.personsEdit', {
      url: '/persons/:id/edit',
      controller: 'PersonEditController',
      controllerAs: '$personCtrl',
      template: editTemplate,
      title: 'Persons',
      resolve,
    });
});

export default personsModule;
