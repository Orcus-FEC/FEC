import React from 'react';
import axios from 'axios';

import {listQuestionsData, answersListData} from './dummyData.js';

import Questions from './Questions.jsx';
import QuestionsList from './QuestionsList.jsx';


// CSS STYLINGS GO HERE


class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsData: [],
      maxQuestionsDisplayed: 4,
      filtered: false,
      inputSearch: '',
      expandList: false
    };

      //bind
  }

  componentDidMount() {
    this.fetchQuestionID();
  }

  fetchQuestionID() {
  // console.log('DummyData: ', listQuestionsData);
    axios.get('/qa/questions')
      .then((response) => {
        console.log('Fetch Q Response: ', response);
        this.setState({
          questionsData: response.data
        });
      })
      .catch((error) => {
        console.log('Cannot retrieve Questions: ', error)
      });
  }


  handleSearch() {

  }


  showMoreList() {

  }


  render() {

    return (

      <div>
        <h1>Questions</h1>

          <Questions />
          <QuestionsList />

      </div>
    )
  }
}


export default QuestionsAndAnswers;