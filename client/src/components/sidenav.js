import template from '../templates/sidenav.html';

class AppSidenavControl {
  constructor(AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

const AppSidenav = {
  controller: AppSidenavControl,
  template,
};

export default AppSidenav;
