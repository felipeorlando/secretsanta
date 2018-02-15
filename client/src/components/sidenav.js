import template from '../templates/sidenav.html';

class AppSidenavController {
  constructor(AppConstants, JWT, $mdSidenav, $state, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;

    this.menu = [
      { title: 'Home', route: 'app.home', icon: 'home' },
      { title: 'Persons', route: 'app.persons', icon: 'face' },
      { title: 'Users', route: 'app.users', icon: 'perm-identity' },
    ];

    this.jwt = JWT;
    this.state = $state;
    this.sidenav = $mdSidenav;
  }

  logout() {
    this.jwt.destroy();
    this.toggleList();
    this.state.go('app.authLogin');
  }

  toggleList($mdSidenav) {
    return this.sidenav('left').toggle();
  }
}

const AppSidenav = {
  controller: AppSidenavController,
  controllerAs: '$sidenavCtrl',
  template,
};

export default AppSidenav;
