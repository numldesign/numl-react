const { screenSizes } = require('./NumlTypes');

module.exports = {
  screenSizes: (param) => {
    return screenSizes[param];
  },
};
