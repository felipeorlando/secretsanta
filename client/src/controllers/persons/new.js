import dialog from '../../components/dialog';

class PersonNewController {
  constructor(Person, $stateParams, $location, $mdDialog, $scope) {
    'ngInject';

    this.submit = () => {
      let person = this.person;

      Person.create({ person }).then(res => {
        $location.path('/persons');

        dialog(
          'Done!',
          'Person was created succesfully!',
          $mdDialog
        );
      });
    };
  }
}

export default PersonNewController;
