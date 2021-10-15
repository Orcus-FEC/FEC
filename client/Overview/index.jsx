import React from 'react';
import axios from 'axios';
import ImageGallery from './image-carousel/ImageGallery.jsx';
import styled from 'styled-components';
import ProductDetail from './overview-components/ProductDetail.jsx';
import PriceDisplay from './overview-components/PriceDisplay.jsx';
import StyleSelector from './style-selector/StyleSelector.jsx';
import ProductDescription from './overview-components/ProductDescription.jsx';
import SocialShare from './overview-components/SocialShare.jsx';
import StarRating from '../StarRating.js';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: '',
      currentProductId: 37311,
      selectedStyle: null,
      styles: []
    }
    this.setPickedStyle = this.setPickedStyle.bind(this);
    this.scrollToReviews = this.scrollToReviews.bind(this);
  }

  componentDidUpdate() {
    if (this.state.currentProductId !== this.props.selectedProductID) {
      this.setState({
        currentProductId: this.props.selectedProductID
      })
      var defaultProduct = {
        params: {
          id: this.props.selectedProductID
        }
      }
      this.getCurrentProduct(defaultProduct);
      this.getCurrentProductStyles(defaultProduct)
    }
  }


  componentDidMount() {
    var defaultProduct = {
      params: {
        id: this.state.currentProductId
      }
    }
    this.getCurrentProduct(defaultProduct);
    this.getCurrentProductStyles(defaultProduct)
  }

  getCurrentProduct(defaultProduct) {
    axios.get('/api/products/product', defaultProduct)
      .then((defaultProductInfo) => {
        // console.log(defaultProduct)
        this.setState({
          currentProduct: defaultProductInfo.data
        })
        // console.log('default product', defaultProductInfo.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  getCurrentProductStyles(defaultProduct) {
    axios.get('/api/products/productStyles', defaultProduct)
      .then((defaultProductStyles) => {
        this.setState({
          styles: defaultProductStyles.data.results,
          selectedStyle: defaultProductStyles.data.results[0]
        })
        // console.log(defaultProductStyles.data.results[0]);
      })
  }

  setPickedStyle(styleId) {
    // console.log('this is styleId', styleId)
    var newStyle = this.state.styles.find(style => style.style_id === styleId);
    // console.log('this is new style', newStyle)
    this.setState({
      selectedStyle: newStyle
    })
  }

  scrollToReviews() {
    document.getElementById('rateReview').scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    // return (
    //   <div>
    return (
      <div class='main-container'>
      <Grid className="grid">
        <LeftContainer className="leftContainer">
          {(!this.state.selectedStyle) ? <div></div> : <ImageGallery selectedStyle={this.state.selectedStyle} />}
        </LeftContainer>
        <RightContainer className="rightContainer">
          <section className='link-review'>
            {(document.getElementById('star-number') === null)  ?
            (<div>Loading...</div>) :

              (<Stars>
                <NumberStyle className='star-display'>{document.getElementById('star-number').innerHTML}</NumberStyle>
                <StarRating rating={document.getElementById('star-number').innerHTML} />
              </Stars>
              )}

            {(!document.getElementById('rateReview')) ? (<div class='review-scroller' >View All Reviews</div>) :
              <a class='review-scroller' onClick={this.scrollToReviews}>View All Reviews</a>}
          </section>
          <ProductDetail currentProduct={this.state.currentProduct} />
          <PriceDisplay selectedStyle={this.state.selectedStyle} />
          <StyleSelector selectedStyle={this.state.selectedStyle} styles={this.state.styles} setPickedStyle={this.setPickedStyle} />
          <SocialShare selectedStyle={this.state.selectedStyle} />
        </RightContainer>
      </Grid>
        <ProductDescription currentProduct={this.state.currentProduct} />
      </div>
    )
  }
}

var Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
  margin-bot: 20px
`
// set left container to 100% width
var LeftContainer = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 2;
  min-height: 500px;
  max-width: 100%;
`

var RightContainer = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  max-width: 700px
`
var Stars = styled.div`
  display: flex;
`;
var NumberStyle = styled.div`
  font-size: 48px;
`;

export default Product
