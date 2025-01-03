const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }
  const MONTH = date.getMonth();

  if (MONTH >= 11 || MONTH <= 1 ) {
    return 'winter'
  } else if (MONTH >= 2 && MONTH <= 4){
    return 'spring'
  } else if (MONTH >= 5 && MONTH <= 7){
    return 'summer'
  } else if (MONTH >= 8 && MONTH <= 10){
    return 'autumn'
  }

  throw new Error("Invalid date!");
}

module.exports = {
  getSeason
};
