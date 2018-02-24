import { resolve } from 'path'

const env = process.env.NODE_ENV || 'development'

const DEV = env === 'development'
const PROD = env === 'production'

const abs = resolve(__dirname, '..')

const base = (...args) => resolve(...[abs, ...args])

const paths = {
  base,
  src: base.bind(null, 'src'),
  dist: base.bind(null, 'dist')
}

const config = {
  paths,
  serverHost: 'localhost',
  serverPort: process.env.PORT || 3000,
  compilerDevTool: DEV && 'cheap-source-map',
  compilerGlobals: {
    'process.env': {
      NODE_ENV: JSON.stringify(env)
    },
    DEV,
    PROD
  },
  compilerFailOnWarning: PROD,
  compilerOutputPath: paths.dist(),
  compilerPublicPath: '/',
  compilerVendor: [
    'react', 'react-dom', 'react-redux'
  ]
}

config.devServer = {
  port: 3000
}

export default config
