require('dotenv').config()

const withSass = require('@zeit/next-sass')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const webpack = require('webpack')
module.exports = withSass({
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )

    if(config.resolve.plugins) {
        config.resolve.plugins.push(new TsConfigPathsPlugin())
    } else {
        config.resolve.plugins = [new TsConfigPathsPlugin()]
    }

    return config
  },
  serverRuntimeConfig: { // Will only be available on the server side
   ghost: {
       url: process.env.REACT_APP_GHOST_URL,
       key: process.env.REACT_APP_GHOST_KEY,
       version: process.env.REACT_APP_GHOST_VERSION,
   }
  },
  publicRuntimeConfig: { // Will be available on both server and client
    ghost: {
        url: process.env.REACT_APP_GHOST_URL,
        key: process.env.REACT_APP_GHOST_KEY,
        version: process.env.REACT_APP_GHOST_VERSION,
    }
  }
})
