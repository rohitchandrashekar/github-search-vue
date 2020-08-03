(function () {

    module.exports = (app) => {
        const searchController = require("../controllers/searchController");
        const reportController = require("../controllers/reportController");

        app.get('/searchReport', reportController.getReport);

        app.get('/searchByTopic', searchController.searchByTopic);

        app.get('/searchByLanguage', searchController.searchByLanguage);
    }

})();