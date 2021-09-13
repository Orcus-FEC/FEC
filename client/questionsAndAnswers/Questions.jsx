import React from 'react';
import axios from 'axios';

import Answers from './Answers.jsx';
import AnswersList from './AnswersList.jsx';


// CSS STYLINGS GO HERE



class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eachQuestion: []
    }


  }


  componentDidMount() {


  }




  render() {

    return (
      <div>

      <Answers />
      <AnswersList />

      </div>
    )
  }
}


export default Questions;