const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // devtool: prod ? "hidden-source-map" : "eval",

  // entry 기준 연관된 파일 번들링
  entry: "./src/index.tsx",

  devServer: {
    port: 3000,
    hot: true,
  },

  // 번들링된 js 파일의 이름과 저장 경로 지정
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  // 번들링 될 파일 확장자 등록
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  // 설치 플러그인 적용 옵션
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
