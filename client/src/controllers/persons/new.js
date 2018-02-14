class PersonNewController {
  constructor(Person, $stateParams, $location, $mdToast, $scope) {
    'ngInject';

    this.submit = () => {
      let person = this.person;

      Person.create({ person }).then(res => {
        $location.path('/persons');

        $mdToast.show($mdToast.newPerson());
      });
    };
  }
}

export default PersonNewController;
