const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const isDevelopment = process.env.NODE_ENV !== "production";
const distDir = isDevelopment ? "dist-dev" : "dist-prod";
const envFile = isDevelopment ? ".env.development" : ".env.production";

module.exports = {
  entry: {
    popup: path.resolve(__dirname, "src/popup.tsx"),
  },
  output: {
    path: path.resolve(__dirname, distDir),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader", // Add this loader for Tailwind and PostCSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css", // Output CSS file per entry point
    }),
    new HtmlWebpackPlugin({
      filename: "popup.html",
      template: path.resolve(__dirname, "public/popup.html"),
      chunks: ["popup"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, distDir),
          globOptions: {
            ignore: ["**/popup.html"], // Ignore HTML files managed by HtmlWebpackPlugin
          },
        },
      ],
    }),
    new Dotenv({
      path: envFile,
      safe: false,
      systemvars: true, // Load system variables as well if they exist
      allowEmptyValues: true,
    }),
  ],
  devtool: isDevelopment ? "cheap-module-source-map" : false,
  mode: isDevelopment ? "development" : "production",
  watch: isDevelopment,
};
