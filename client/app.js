import React from 'react';
import ReactDOM from 'react-dom';
import RelatedList from './relatedComparison/RelatedList.jsx';
import RateReview from './ratings-reviews/index.jsx';
import QuestionsList from './questionsAndAnswers/QuestionsList.jsx';

class App extends React.Component {
  render () {
    return (
    <div>
      <div>Overview placeholder</div>
      <div id ='relatedAndComparison'>
          <RelatedList />
          <h4>Placeholder for outfit section</h4>
      </div>
      <div>Questions and Answers placeholder</div>
      <div id='questionsAndAnswers'>
        <QuestionsList />
      </div>


      <div>Ratings and Review placeholder</div>
      <div id='rateReview'>
        <RateReview />
      </div>
    </div>)
  }
}

export default App;