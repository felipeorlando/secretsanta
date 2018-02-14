class PersonEditController {
  constructor(Person, $stateParams, $scope) {
    'ngInject';

    this.id = $stateParams.id;

    Person.find(this.id).then(res => {
      if (res.data.person && !res.data.error) {
        this.person = res.data.person;
      }
    });

    this.update = () => {
      const person = this.person;

      Person.update(this.id, { person }).then(res => {
        $location.path('/persons');
        $mdToast.show($mdToast.newUser());
      });
    };
  }
}

export default PersonEditController;
