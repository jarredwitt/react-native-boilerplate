const screenGenerator = require('./screen/index.js');

module.exports = (plop) => {
  plop.setGenerator('screen', screenGenerator);
};
