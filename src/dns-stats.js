const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let DNSStats = {};
  const reversedDomainsArr = domains.map(domain => domain.split('.').reverse());
  for (let domain of reversedDomainsArr) {
    let key = '';
    for (let subdomain of domain) {
      key += `.${subdomain}`;
      DNSStats[key] ? DNSStats[key]++ : DNSStats[key] = 1;
    }
  }

  return DNSStats;
}

module.exports = {
  getDNSStats
};