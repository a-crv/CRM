const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourcePath = path.join(__dirname, './app');
const staticsPath = path.join(__dirname, './static');

module.exports = function(env) {
  const nodeEnv = env && env.prod ? 'production' : 'development';
  const isProd = nodeEnv === 'production';

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: nodeEnv,
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/main.css',
      allChunks: true
    })
  ];

  if (isProd) {
    plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      // new webpack.DefinePlugin({
      //   'process.env.NODE_ENV': JSON.stringify('production')
      // }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
        },
        output: {
          comments: false,
        },
      }),
      new CopyWebpackPlugin([
        { from: 'assets/img', to: 'assets/img' }
      ])
    );
  } else {
    plugins.push(
      // make hot reloading work
      new webpack.HotModuleReplacementPlugin(),
      // show module names instead of numbers in webpack stats
      new webpack.NamedModulesPlugin(),
      // don't spit out any errors in compiled assets
      new webpack.NoEmitOnErrorsPlugin()
    );
  }

  return {
    devtool: isProd ? false : 'eval',
    context: sourcePath,
    entry: {
      js: './index.js',
      styles: './assets/css/main.scss',
      vendor: ['react']
    },
    output: {
      path: staticsPath,
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(html|svg|jpe?g|png|gif|ttf|woff2?)$/i,
          exclude: [/bower_components/, /node_modules/, /twopointoh/],
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            },
          },
        },
        {
          test: /\.scss$/,
          exclude: [/bower_components/, /node_modules/, /twopointoh/],
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              // 'css-loader?url=false',
              'css-loader',
              'resolve-url-loader',
              'sass-loader?sourceMap'
            ]
          })
        },
        {
          test: /\.(js|jsx)$/,
          exclude: [/bower_components/, /node_modules/, /twopointoh/],
          use: ['babel-loader']
        }
      ],
    },
    resolve: {
      extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ]
    },

    plugins,

    performance: isProd && {
      maxAssetSize: 100,
      maxEntrypointSize: 300,
      hints: 'warning',
    },

    stats: {
      colors: {
        green: '\u001b[32m',
      }
    },

    devServer: {
      contentBase: './app',
      // publicPath: '/',
      historyApiFallback: true,
      port: 3000,
      compress: isProd,
      inline: !isProd,
      hot: !isProd,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m',
        }
      },
    }
  };
};
