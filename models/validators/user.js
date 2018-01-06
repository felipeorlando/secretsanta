class UserValidator {
  static validateEmail(email) {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailFormat.test(email);
  }
}

export default UserValidator;
