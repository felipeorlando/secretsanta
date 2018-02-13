import template from '../templates/sidenav.html';

class AppSidenavController {
  constructor(AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

const AppSidenav = {
  controller: AppSidenavController,
  controllerAs: '$sidenavCtrl',
  template,
};

export default AppSidenav;
