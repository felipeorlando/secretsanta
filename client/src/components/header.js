import template from '../templates/header.html';

class AppHeaderController {
  constructor(AppConstants, AuthService, $mdSidenav, $scope, $rootScope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.toggleList = () => {
      return $mdSidenav('left').toggle();
    };

    AuthService.isLogged().then(result => {
      this.logged = result;
    });

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
      AuthService.isLogged().then(result => {
        this.logged = result;
      });
    });
  }

}

const AppHeader = {
  controller: AppHeaderController,
  controllerAs: '$headerCtrl',
  template
};

export default AppHeader;
