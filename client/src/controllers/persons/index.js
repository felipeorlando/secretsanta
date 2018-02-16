import dialog from '../../components/dialog';

class PersonsController {
  constructor(Person, $mdDialog, $scope) {
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

    this.match = () => dialog(
      'Matched!', 
      'Each person will receive a email with matched friend!', 
      $mdDialog
    );
  }
}

export default PersonsController;
