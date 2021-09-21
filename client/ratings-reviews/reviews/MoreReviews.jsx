import React from 'react';
import styled from 'styled-components';

class MoreReviews extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
    this.props.show();
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <MoreReviewsStyle>
          <p>MORE REVIEWS</p>
        </MoreReviewsStyle>
      </div>
    );
  }
}

var MoreReviewsStyle = styled.div`
  border: 1px solid;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export default MoreReviews;