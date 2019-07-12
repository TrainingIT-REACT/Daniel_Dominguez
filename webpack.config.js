// Librerías
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    main: "./src/index.js",
    vendor: ["react", "react-dom", "react-router-dom"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico"
    })
  ],
  devServer: {
    contentBase: "./build",
    historyApiFallback: true
  },
  devtool: "source-map",
  optimization: {
    usedExports: true,
    sideEffects: true,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: "vendor",
          name: "vendor",
          enforce: true,
          chunks: "all"
        }
      }
    }
  }
};

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";
  if (isDevelopment) {
    config.devtool = "eval-source-map";
  } else {
    config.devtool = "hidden-source-map";
  }
  return config;
};
