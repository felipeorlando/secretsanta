import dialog from '../../components/dialog';

class PersonsController {
  constructor(Person, AppConstants, $http, $mdDialog, $scope) {
    'ngInject';

    Person.all().then(res => {
      this.persons = res.data.persons;
    });

    this.destroy = (id) => {
      Person.destroy(id).then(res => {
        const index = this.persons.findIndex((person) => {
          return person._id === id;
        });

        this.persons.splice(index, 1);

        dialog(
          'Done!',
          'Person was deleted succesfully!',
          $mdDialog
        );
      });
    }

    this.api = AppConstants.api;    
    this.http = $http;
    this.mdDialog = $mdDialog;
  }

  match() {
    return this.http
      .post(`${this.api}/persons/match`)
      .then(res => {
        if (res.data.job.success) {
          dialog(
            'Matched!',
            'Each person will receive a email with matched friend!',
            this.mdDialog
          );
        } else {
          dialog(
            'Wait!',
            'Something is wrog!',
            this.mdDialog
          );
        }
      });
  }
}

export default PersonsController;
