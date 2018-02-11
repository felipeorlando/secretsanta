import template from '../templates/header.html';

class AppHeaderControl {
  constructor(AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    // this.currentUser = User.current;
  }
}

const AppHeader = {
  controller: AppHeaderControl,
  template,
};

export default AppHeader;
