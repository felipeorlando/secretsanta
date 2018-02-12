import template from '../layout/index.html';

function AppConfig(
  $locationProvider,
  $stateProvider,
  $urlRouterProvider,
  $mdIconProvider,
  $mdThemingProvider
) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider.state('app', {
    abstract: true,
    template
  });

  $urlRouterProvider.otherwise('/');

  $mdIconProvider
    .icon('menu', '../assets/icons/navigation/menu.svg', 24);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('red', { default: '700' })
    .accentPalette('green');
}

export default AppConfig;
