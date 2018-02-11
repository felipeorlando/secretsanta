import angular from 'angular';
import header from '../components/header';
import '../assets/stylesheets/vendor/material-components-web.min.css';

let layoutModule = angular.module('app.layout', []);

layoutModule.component('appHeader', header);

export default layoutModule;
