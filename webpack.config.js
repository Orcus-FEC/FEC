var path = require("path");


module.exports = {
  entry: path.join(__dirname, "/client/index.js");,
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/public");
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
