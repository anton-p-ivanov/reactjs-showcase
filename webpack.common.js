const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public/build'),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Production',
    template: path.resolve(__dirname, 'public', 'index.html'),
    favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
  })],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@forms': path.resolve(__dirname, 'src/modules/forms'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: [
              "@babel/plugin-transform-runtime",
            ]
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        include: /src/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[folder]__[local]__[hash:base64:5]'
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: [
          'file-loader'
        ],
      },
    ],
  },
};
