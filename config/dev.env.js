'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
var host = require('../build/IP')()
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  host
})
