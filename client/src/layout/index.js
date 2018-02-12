import angular from 'angular';
import header from '../components/header';
import sidenav from '../components/sidenav';

let layoutModule = angular.module('app.layout', []);

layoutModule.component('appHeader', header);
layoutModule.component('appSidenav', sidenav);

export default layoutModule;
