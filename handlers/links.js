const config = require('../config')
const getData = require('../lib/get-data')
const { parse } = require('url')
const logger = require('../lib/logger')

module.exports = async (req, res) => {
  const { query } = await parse(req.url, true)
  const roles = query.roles.split(',').join('|')

  const url = `${config.url.links}/links?roles=${roles}`
  logger('info', ['links', url])
  try {
    const data = await getData(url)
    return data
  } catch (e) {
    throw e
  }
}
