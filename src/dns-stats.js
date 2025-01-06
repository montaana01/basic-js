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
  const DNSStats = {}

  domains.forEach(domain => {
    const split = domain.split('.').reverse();
    let current = '';

    split.forEach((domain) => {
      current = `${current}.${domain}`;
      if (DNSStats[current]) {
        DNSStats[current] += 1;
      } else {
        DNSStats[current] = 1;
      }
    })
  })

  return DNSStats;
}

module.exports = {
  getDNSStats
};
