var models = require('../models');

module.exports = {

  get: function (req, res) {

    models.questionsAPI.getQuestions((err, results) => {

      if (error) {
        res.status(404).send(error);
      } else {
        console.log('Retrieved All Questions!! ', results);
        res.status(200).json(results);
      }
    });
  },

  post: function (req, res) {

    var params = [req.body];

    models.questionsAPI.postQuestions(params, (error, results) => {

      if (error) {
        console.log('Body: ', req.body);
        res.status(404).send(error);
      } else {
        console.log('Created Question!! ', results);
        res.status(200).send(results);
      }
    });
  },

  put: function (req, res) {

    models.questionsAPI.putQuestions(req.body, (error, results) => {

      if (error) {
        console.log('Body: ', req.body);
        res.status(404).send(error);
      } else {
        console.log('Updated Questions!! ', results);
        res.status(200).send(results);
      }
    });
  }
};