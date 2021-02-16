const router = require('express').Router();
let Question = require('../models/question.model');

router.route('/').get((req, res) => {
    Question.find()
        .then(qst => res.json(qst))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const publication = req.body.publication;
    const newQuestion = new Question({
        title,
        publication
    });

    newQuestion.save()
        .then(()=> res.json('Question added!'))
        .catch((err)=> res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Question.findById(req.params.id)
        .then(qst => res.json(qst))
        .catch(err=> res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json('Question deleted!'))
        .catch(err=> res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => {
    Question.findById(req.params.id)
        .then(q => {
            q.title = req.body.title;
            q.publication = req.body.publication;

            q.save()
                .then(()=> res.json('Question updated!'))
                .catch((err)=> res.status(400).json('Error: ' + err))
        })
        .catch(err=> res.status(400).json('Error: ' + err))
});

module.exports = router;