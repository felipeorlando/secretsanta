import Person from '../models/person';

class PersonController {
  index(req, res) {
    Person.find({}, (error, persons) => {
      if (error) res.status(404).json({ error });

      res.status(200).json({ persons });
    });
  }

  create(req, res) {
    const params = req.body.person;

    Person.create(params, (error, person) => {
      if (error) return res.status(200).json({ error });

      res.status(200).json({ person });
    });
  }

  show(req, res) {
    Person.findById(req.params.id, (error, person) => {
      if (error) res.status(404).json({ error });

      res.status(200).json({ person });
    });
  }

  update(req, res) {
    const params = req.body.person;
    const personId = req.params.id;

    Person.findByIdAndUpdate(personId, { $set: params }, { new: true }, (error, person) => {
      if (error) return res.status(200).json({ error });

      res.status(200).json({ person });
    });
  }

  delete(req, res) {
    Person.findOneAndRemove(req.params.id, (error, person) => {
      if (error) res.status(404).json({ error });

      res.status(200).json({
        message: 'Person was deleted',
        personId: person._id,
      });
    });
  }

  match(req, res) {
    Person.matchAll().then(() => {
      Person.find({}, (error, persons) => {
        res.status(200).json({ persons });
      });
    });
  }
}

export default PersonController;
