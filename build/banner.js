var version =
  process.env.KDU_VERSION ||
  require('../package.json').version

module.exports =
  'Kdu.js v' + version + '\n' +
  '(c) ' + new Date().getFullYear() + ' NKDuy\n' +
  'Released under the MIT License.'
