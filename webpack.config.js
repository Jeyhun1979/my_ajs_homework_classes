const path = require('path');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'bundle.[contenthash].js' : 'bundle.js',
      clean: true,
    },
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      static: './dist',
      hot: true,
      open: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    optimization: {
      minimize: isProd,
    },
  };
};
