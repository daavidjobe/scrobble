import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import config from './config'

const { paths, devServer } = config
const { DEV, PROD } = config.compilerGlobals

const webpackConfig = {
  devtool: config.compilerDevTool,
  entry: {
    app: paths.src('index.js'),
    vendor: [...config.compilerVendor]
  },
  output: {
    filename: '[name].[hash].js',
    pathinfo: true,
    path: config.compilerOutputPath,
    publicPath: config.compilerPublicPath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.src('index.html'),
      minify: { collapseWhitespace: true }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new ExtractTextPlugin('[name].[hash].css')
  ],
  resolve: {
    modules: [
      paths.base(),
      'node_modules'
    ]
  },
  devServer
}

const jsLoaders = [
  {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true
    }
  }
]

if (DEV) {
  jsLoaders.unshift('react-hot-loader/webpack')
}

webpackConfig.module.rules = [
  ...webpackConfig.module.rules, {
    test: /\.js$/,
    exclude: /node_modules/,
    use: jsLoaders
  }
]

if (DEV) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

if (PROD) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      unused: true,
      dead_code: true
    })
  )
}

export default webpackConfig
