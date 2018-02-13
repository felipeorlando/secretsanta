import template from '../templates/header.html';

class AppHeaderController {
  constructor(AppConstants, $mdSidenav, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.toggleList = () => {
      return $mdSidenav('left').toggle();
    };
  }
}

const AppHeader = {
  controller: AppHeaderController,
  controllerAs: '$headerCtrl',
  template
};

export default AppHeader;
