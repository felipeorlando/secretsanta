import template from '../layout/index.html';

function AppConfig($locationProvider, $stateProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider.state('app', {
    abstract: true,
    template,
  });

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
