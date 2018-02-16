import dialog from '../../components/dialog';
class UserEditController {
  constructor(User, $stateParams, $location, $mdDialog, $scope) {
    'ngInject';

    this.id = $stateParams.id;
    this.changePassword = false;

    User.find(this.id).then(res => {
      if (res.data.user && !res.data.error) {
        this.user = res.data.user;
        this.user.password = null;
      }
    });

    this.update = () => {
      const user = this.user;

      if (!this.changePassword) {
        user.password = null;
      }

      User.update(this.id, { user }).then(res => {
        $location.path('/users');
        
        dialog(
          'Done!',
          'User was updated succesfully!',
          $mdDialog
        );
      });
    };
  }
}

export default UserEditController;
