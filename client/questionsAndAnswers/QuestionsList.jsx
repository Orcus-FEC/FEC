import React from 'react';

import { listQuestionsData, answersListData } from './dummyData.js';
import IndividualQuestions from './individualQuestions.jsx';



// CSS STYLINGS GO HERE



// At the center of the Questions and Answers module will be a list of questions that have been asked about the given product.

// The questions and their corresponding answers within this list will be displayed in an expanding and collapsing accordion. By default, on page load up to four questions should be displayed.
// Up to two answers should display for each question. The remaining questions or answers should be hidden until the user loads them using the “More Answered Questions” button (section 1.3.4).

// Questions should appear in order of ‘helpfulness’, corresponding to how many users have indicated that the question was helpful.

// The list will contain all questions by default, but will have the potential to be filtered to a subset based on user searches (section 1.3.3).

// If no questions have been submitted for this product, then the list will collapse, and the button to submit a new question (section 1.3.5) will appear near the top of the module.


class QuestionsList extends React.Component {
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


  }






  render() {

    return (
      <div>
        <p>Questions</p>
        <IndividualQuestions questionsData={this.state.questionsData}/>
      </div>
    )
  }
}


export default QuestionsList;