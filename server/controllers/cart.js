var models = require('../models')

module.exports = {
  addProductToCart: function (req, res) {
    models.productContext.addProductToCart(req.body, (err, product) => {
      if (err) {
        res.send(400 + 'Product was not added');
      } else {
        res.send('Product was added cart!')
      }
    });
  },

  getAllInCart: function (req, res) {
    models.productContext.getAllInCart((err, productsInCart) => {
      if (err) {
        res.send(400 + 'Could not retrieve cart');
      } else {
        res.json(productsInCart)
      }
    });
  }
}