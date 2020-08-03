const { searchHistoryDB } = require('../connections/db');
const reportController = {
    getReport: (req, res) => {
        const response = searchHistoryDB.find({});
        return res.json(response);
    }
}
module.exports = reportController;