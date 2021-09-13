import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class QuestionsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: ''
    }


  }

  componentDidMount() {
    this.
  }



    axios.get('/qa/questions')
      .then(({ data }) => {
        this.setState({
          repos: data
        });
      });









  render () {
    return (
    <div>
      <h1>fec running from react</h1>
    </div>)
  }
}

export default QuestionsList;