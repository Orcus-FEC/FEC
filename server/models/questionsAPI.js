const axios = require('axios');
const config = require('../../config.js');

// const baseAPI =  `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/`;

// Use of Parameters
// In an HTTP GET request, parameters are sent as a query string:

// http://example.com/page?parameter=value&also=another

// In an HTTP POST or PUT request, the parameters are not sent along with the URI, but in the request body. Parameters noted for each route below follow this standard.


const getQuestions = (callback) => {

  // let queryString;

  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`,
    {
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN
      },
    },
  )
  .then((response) => {
    console.log('Fetch All Qs Response: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error, null);
  });
};

const postQuestions = (query, callback) => {

  let options = {

    url: `${baseAPI}/qa/questions`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };

  axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`, query,
    {
      headers: {
        'Authorization': config.TOKEN
      },
    },
  )
  .then((response) => {
    console.log('Created Question!: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error, null);
  });
};

const putQuestions = (query, callback) => {

  let options = {

    url: `${baseAPI}/qa/questions`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  };

  axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`, query,
    {
      headers: {
        'Authorization': config.TOKEN
      },
    },
  )
  .then((response) => {
    console.log('Created Question!: ', response.data);
    callback(null, response.data);
  })
  .catch((error) => {
    callback(error, null);
  });
};

module.exports.getQuestions = getQuestions;
module.exports.postQuestions = postQuestions;
module.exports.putQuestions = putQuestions;