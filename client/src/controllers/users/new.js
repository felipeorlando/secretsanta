import dialog from '../../components/dialog';
class UserNewController {
  constructor(User, $stateParams, $location, $mdDialog, $scope) {
    'ngInject';

    this.id = $stateParams.id;

    this.submit = () => {
      let user = this.user;

      User.create({ user }).then(res => {
        $location.path('/users');

        dialog(
          'Done!',
          'User was created succesfully!',
          $mdDialog
        );
      });
    };
  }
}

export default UserNewController;
