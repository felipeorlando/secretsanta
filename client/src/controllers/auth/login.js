class AuthLoginController {
  constructor(AuthService, $state) {
    'ngInject';

    this.authService = AuthService;
    this.state = $state;

    this.authType = $state.current.name;
  }

  submitForm() {
    this.isSubmitting = true;

    this.authService.attempt(this.user).then(
      (res) => {
        this.state.go('app.home');
      },
      (err) => {
        this.isSubmitting = false;
        // this.errors = err.data.errors;
      }
    )
  }
}

export default AuthLoginController;
