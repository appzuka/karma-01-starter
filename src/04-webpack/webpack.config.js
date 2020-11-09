const path = require('path');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "test-component.tsx"),
  output: {
    filename: "./test-component-bundle.karma.js",
    path: __dirname,
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};