const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    bundle: ["./src/main.js"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: path.join(__dirname, "public", "build"),
    filename: "[name].js",
    chunkFilename: "[hash].[id].js",
    publicPath: "/build/",
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true,
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
