import template from '../layout/index.html';

function AppConfig(
  $locationProvider,
  $stateProvider,
  $urlRouterProvider,
  $mdThemingProvider
) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider.state('app', {
    abstract: true,
    template
  });

  $urlRouterProvider.otherwise('/');

  $mdThemingProvider
    .theme('default')
    .primaryPalette('red')
    .accentPalette('green');
}

export default AppConfig;
