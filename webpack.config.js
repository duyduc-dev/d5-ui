const fileNameAliases = require('./filename-aliases');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

/**  @type {(env: any, arg: {mode: string}) => import('webpack').Configuration} **/
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isAnalyze = Boolean(env?.analyze);
  /** @type {import('webpack').Configuration} */
  const configs = {
    resolve: {
      extensions: ['.jsx', '.js', '.json', '.otf', '.scss', '.woff2'],
      alias: fileNameAliases,
    },
    entry: ['@babel/polyfill', './src/index.js'],
    module: {
      rules: [
        {
          test: /\.m?js/,
          type: 'javascript/auto',
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
              plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]],
            },
          },
        },
        // {
        //   test: /\.(ts|tsx)$/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
        //       plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]],
        //     },
        //   },
        // },
        {
          test: /\.(s(a|c)ss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]-obollo-[hash:base64:6]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isProduction ? 'static/media/[name].[contenthash:6].[ext]' : '[path][name].[ext]',
              },
            },
          ],
        },
        // {
        //   test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: [
        //     {
        //       loader: "file-loader",
        //       options: {
        //         name: "[name].[contenthash].[ext]",
        //         outputPath: "fonts/",
        //       },
        //     },
        //   ],
        // },
        // {
        //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
        //   type: 'asset/resource',
        //   generator: {
        //     name: "[name].[contenthash].[ext]",
        //     outputPath: "fonts/",
        //   }
        // },
        // {
        //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: [
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         name: isProduction ? 'static/fonts/[name].[ext]' : '[path][name].[ext]',
        //       },
        //     },
        //   ],
        // },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
      ],
    },

    output: {
      filename: 'static/js/main.[contenthash:6].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devServer: {
      hot: true,
      port: 1908,
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, 'public', 'index.html'),
        serveIndex: true,
        watch: true,
      },
    },
    devtool: isProduction ? false : 'source-map',
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProduction ? 'static/css/[name].[contenthash:6].css' : '[name].css',
      }),
      new Dotenv(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            to: '.',
            filter: (name) => {
              return !name.endsWith('index.html');
            },
          },
        ],
      }),

      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html',
      }),
      new ESLintPlugin({
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      }),
      new CaseSensitivePathsPlugin(),
    ],
  };

  if (isProduction) {
    configs.plugins = [
      ...configs.plugins,
      new webpack.ProgressPlugin(),
      new CompressionPlugin({
        test: /\.(css|js)$/,
        algorithm: 'brotliCompress',
      }),
      new CleanWebpackPlugin(),
    ];
    if (isAnalyze) {
      configs.plugins = [...configs.plugins, new BundleAnalyzerPlugin()];
    }
    configs.optimization = {
      minimizer: [`...`, new CssMinimizerPlugin()],
    };
  }

  return {
    ...configs,
  };
};
