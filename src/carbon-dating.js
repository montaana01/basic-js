const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const number = parseFloat(sampleActivity);

  if (typeof sampleActivity !== "string" || typeof number !== "number" || isNaN(number) || number <= 0 || number >= MODERN_ACTIVITY) {
    return false
  }
  const LOG = Math.log(MODERN_ACTIVITY/number);
  const K = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(LOG/ K) ;
}

module.exports = {
  dateSample
};
