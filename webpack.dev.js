const path = require("path");
const merge = require("webpack-merge");
const mainConfig = require("./webpack.config.js");

module.exports = merge(mainConfig, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 5000,
  },
});
