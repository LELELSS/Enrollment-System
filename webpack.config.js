// webpack.config.js
module.exports = {
    resolve: {
      fallback: {
        "fs": require.resolve("browserify-fs"),
      },
    },
  };