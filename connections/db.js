const loki = require('lokijs');
const db = new loki('github-search.db');
const searchHistoryDB = db.addCollection('searchHistory');

module.exports.searchHistoryDB = searchHistoryDB;