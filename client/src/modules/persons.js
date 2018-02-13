import angular from 'angular';
import PersonsController from '../controllers/persons';
import listTemplate from '../templates/persons.html';
import newTemplate from "../templates/persons.new.html";
import editTemplate from '../templates/persons.edit.html';

let personsModule = angular.module('app.persons', []);

personsModule.controller('PersonsController', PersonsController);

personsModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('app.persons', {
      url: '/persons',
      controller: 'PersonsController',
      controllerAs: '$personsCtrl',
      template: listTemplate,
      title: 'Persons'
    })
    .state('app.personsNew', {
      url: '/persons/new',
      controller: 'PersonsController',
      controllerAs: '$personsCtrl',
      template: newTemplate,
      title: 'Persons'
    })
    .state('app.personsEdit', {
      url: '/persons/:id/edit',
      controller: 'PersonsController',
      controllerAs: '$personsCtrl',
      template: editTemplate,
      title: 'Persons'
    });
});

export default personsModule;
