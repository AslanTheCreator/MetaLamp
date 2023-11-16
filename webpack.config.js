const path = require("path");
const PugPlugin = require("pug-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
    clean: true,
  },
  entry: {
    index: "./src/views/index.pug",
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      js: {
        filename: "assets/js/[name].[contenthash:8].js",
      },
      css: {
        filename: "assets/css/[name].[contenthash:8].css",
      },
    }),
  ],
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
};
