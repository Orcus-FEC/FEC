var controller = require('./controllers');
var router = require('express').Router();


router.get('/qa/questions', controller.questions.get);

router.post('/qa/questions', controller.questions.post);

router.put('/qa/questions', controller.questions.put);

module.exports = router;