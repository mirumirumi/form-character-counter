const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  entry: {
    "content-script": "./src/content-script.ts",
  },
  output: {
    path: path.resolve(__dirname, "package/src"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
