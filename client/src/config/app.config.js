import authInterceptor from './auth.inteceptor';
import template from '../layout/index.html';

function AppConfig(
  $httpProvider,
  $locationProvider,
  $stateProvider,
  $urlRouterProvider,
  $mdIconProvider,
  $mdThemingProvider
) {
  'ngInject';

  // $httpProvider.interceptors.push(authInterceptor);

  $locationProvider.html5Mode(true);

  $stateProvider.state('app', {
    abstract: true,
    template
  });

  $urlRouterProvider.otherwise('/');

  $mdIconProvider
    .icon('menu', '../assets/icons/navigation/menu.svg', 24)
    .icon('mode-edit', '../assets/icons/editor/mode-edit.svg', 24)
    .icon('delete', '../assets/icons/action/delete.svg', 24)
    .icon('home', '../assets/icons/action/home.svg', 24)
    .icon('face', '../assets/icons/action/face.svg', 24)
    .icon('exit-to-app', '../assets/icons/action/exit-to-app.svg', 24)
    .icon('perm-identity', '../assets/icons/action/perm-identity.svg', 24);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('red', { default: '700' })
    .accentPalette('green');
}

export default AppConfig;
