var webpack = require("webpack");
var path = require("path");

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
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },

  node: {
    Buffer: false
  },

  devtool: "source-map",

  performance: {
    hints: "warning"
  },

  plugins: []
};
