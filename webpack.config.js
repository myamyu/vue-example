/* global __dirname */
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = {
  'dev': {
    mode: 'development',
    devtool: 'inline-source-map',
  },
  'prd': {
    mode: 'production',
  },
};

module.exports = () => {
  const buildEnv = process.env.ENV || 'dev';
  const _mode = mode[buildEnv] || {};

  console.info(`build env:[${buildEnv}]`);
  console.info(`build mode:${JSON.stringify(_mode)}\n`);

  const config = {
    target: 'web',
    cache: true,
    context: path.resolve(__dirname, 'src'),
    mode: _mode.mode || 'development',
    entry: {},
    output: {
      filename: `[name].min.js`,
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.(css|postcss)$/,
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                'vue-style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                  },
                },
                'postcss-loader',
              ],
            },
            {
              use: [
                'vue-style-loader',
                'css-loader',
                'postcss-loader',
              ],
            },
          ],
        },
        {
          test: /\.(png|svg|gif|jpg)$/,
          use: [
            'url-loader',
          ],
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        },
      ],
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: [
        '.ts',
        '.js',
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
    ],
    performance: {hints: false},
  };

  // SourceMapの出力設定
  if (_mode.devtool) {
    config.devtool = _mode.devtool;
  }

  // ソースのエントリ
  config.entry['main'] = './main.ts';

  return config;
};
