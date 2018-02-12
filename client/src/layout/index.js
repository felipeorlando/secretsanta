import angular from 'angular';
import header from '../components/header';

let layoutModule = angular.module('app.layout', []);

layoutModule.component('appHeader', header);

export default layoutModule;
