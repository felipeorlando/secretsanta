import angular from 'angular';

import UserService from '../services/user';
import PersonService from '../services/person';

import JWT from '../services/jwt';
import AuthService from '../services/auth';

let servicesModule = angular.module('app.services', []);

servicesModule.service('JWT', JWT);
servicesModule.service('AuthService', AuthService);
servicesModule.service('User', UserService);
servicesModule.service('Person', PersonService);

export default servicesModule;
