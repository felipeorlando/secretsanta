import dialog from '../../components/dialog';
class PersonEditController {
  constructor(Person, $stateParams, $location, $mdDialog, $scope) {
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
        
        dialog(
          'Done!',
          'Person was updated succesfully!',
          $mdDialog
        );
      });
    };
  }
}

export default PersonEditController;
