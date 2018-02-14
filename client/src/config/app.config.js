import template from '../layout/index.html';

function AppConfig(
  $locationProvider,
  $stateProvider,
  $urlRouterProvider,
  $mdIconProvider,
  $mdThemingProvider,
  $mdToastProvider,
) {
  'ngInject';

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

  $mdToastProvider.addPreset('newUser', {
    options: function() {
      return {
        template:
          '<md-toast>' +
          '<span class="md-toast-text" flex>User created succesfully!</span>' +
          '</md-toast>',
        controllerAs: '$toast',
        bindToController: true
      };
    }
  });

  $mdToastProvider.addPreset('newPerson', {
    options: function() {
      return {
        template:
          '<md-toast>' +
          '<span class="md-toast-text" flex>Person created succesfully!</span>' +
          '</md-toast>',
        controllerAs: '$toast',
        bindToController: true
      };
    }
  });
}

export default AppConfig;
