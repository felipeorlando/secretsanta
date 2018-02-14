import angular from 'angular';
import UserService from '../services/user';
import PersonService from '../services/person';

let servicesModule = angular.module('app.services', []);

servicesModule.service('User', UserService);
servicesModule.service('Person', PersonService);

export default servicesModule;
