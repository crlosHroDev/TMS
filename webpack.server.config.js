const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebPackPlugin = require("clean-webpack-plugin");
const nodeExternals=require('webpack-node-externals');

let config = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "[id].[chunkhash].css"
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  entry: {
    "app": path.resolve(__dirname, "src/pages/containers/app.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ssr/[name].js",
    publicPath:"/",
    chunkFilename: "js/[id].[chunkhash].js",
    libraryTarget:'commonjs2'
  },
  target:"node",
  externals:[nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-object-rest-spread"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000000000,
            fallback: "file-loader",
            name: "img/[name].[hash].[ext]"
          }
        }
      }
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === "production") {
    config.plugins.push(new CleanWebPackPlugin(["dist"], { root: __dirname }));
  }
  return config;
};
