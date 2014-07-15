var browse = require('./browseData'),
    whosHiring = require('./whosHiring');

module.exports = function (server) {
  return {
    addMetric: function (metric) {
      return;
    },

    getAllDownloads: function (next) {
      var d = {
        day: 0,
        week: 0,
        month: 0
      };

      return next(null, d);
    },

    getBrowseData: function (type, arg, skip, limit, next) {
      return next(null, browse[type]);
    },

    getAllWhosHiring: function () {
      return whosHiring.all;
    },

    getRandomWhosHiring: function () {
      return whosHiring.random;
    },

    getRecentAuthors: function (arg, skip, limit, next) {
      return next(null, browse.authors);
    },

    packagesCreated: function (next) {
      return next(null, 0);
    }
  }
};