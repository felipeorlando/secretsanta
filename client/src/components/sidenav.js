import template from '../templates/sidenav.html';

class AppSidenavController {
  constructor(AppConstants, $mdSidenav, $scope) {
    "ngInject";

    this.appName = AppConstants.appName;

    this.menu = [
      { title: "Home", route: "app.home", icon: "home" },
      { title: "Persons", route: "app.persons", icon: "face" },
      { title: "Users", route: "app.users", icon: "perm-identity" },
      { title: "Logout", route: "app.users", icon: "exit-to-app" }
    ];

    this.toggleList = () => {
      return $mdSidenav('left').toggle();
    };
  }
}

const AppSidenav = {
  controller: AppSidenavController,
  controllerAs: '$sidenavCtrl',
  template,
};

export default AppSidenav;
