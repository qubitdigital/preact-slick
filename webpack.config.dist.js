var webpack = require("webpack");
var path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "production",

  entry: "./src/index",

  output: {
    library: "Slider",
    libraryTarget: "umd",
    path: path.join(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: "url-loader",
        options: {
          limit: 8192
        }
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  externals: {
    "preact-compat": {
      commonjs2: "preact-compat",
      commonjs: "preact-compat",
      amd: "preact-compat"
    }
  },

  node: {
    Buffer: false
  },

  devtool: "source-map",

  performance: {
    hints: "warning"
  },

  plugins: [new BundleAnalyzerPlugin()]
};
