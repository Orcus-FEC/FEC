import React from 'react';


// CSS STYLINGS GO HERE



class IndividualQuestions extends React.Component {
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
        <p>Questions</p>
        <ReviewList eachQuestion={this.state.eachQuestion}/>
      </div>
    )
  }
}


export default IndividualQuestions;