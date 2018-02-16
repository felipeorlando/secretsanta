import dialog from '../../components/dialog';

class AuthLoginController {
  constructor(AuthService, $state, $mdDialog) {
    'ngInject';

    this.authService = AuthService;
    this.state = $state;

    this.authType = $state.current.name;
    this.mdDialog = $mdDialog;
  }

  submitForm() {
    this.isSubmitting = true;

    this.authService.attempt(this.user).then(
      (res) => {
        this.state.go('app.home');

        dialog(
          'Done!',
          'You\'re logged in!',
          this.mdDialog
        );
      },
      (err) => {
        this.isSubmitting = false;

        dialog(
          'Fail! 😕',
          'Email or password is wrong',
          this.mdDialog
        );
      }
    )
  }
}

export default AuthLoginController;
