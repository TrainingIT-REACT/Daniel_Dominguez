// Librerías
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const config = {
  entry: {
    main: "./src/index.js"
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
      },
      {
        test: /\.mp3$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico"
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: "./src/sw.js"
    }),
    new WebpackPwaManifest({
      name: "My Progressive Web App",
      short_name: "MyPWA",
      description: "My awesome Progressive Web App!",
      background_color: "#ffffff",
      crossorigin: "use-credentials" //can be null, use-credentials or anonymous
      /*icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve("src/assets/large-icon.png"),
          size: "1024x1024" // you can also use the specifications pattern
        }
      ]*/
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
