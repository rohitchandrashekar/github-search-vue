const http = require('../utils/httpUtil');
const { searchHistoryDB } = require('../connections/db');
const BASEURL = 'https://api.github.com/search'
const searchController = {
    searchByLanguage: async (req, res, next) => {
        try {
            const language = req.query.language;
            const perPage = req.query.perPage;
            const pageNo = req.query.pageNo;
            const resp = await http.get(`${BASEURL}/repositories?q=language:${language}&order=desc&per_page=20`);
            const response = formatData(resp.data.items);
            searchHistoryDB.insert({
                searchKey: language,
                searchCriteria: 'language',
                searchValue: response
            });
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            next(error);
        }
    },
    searchByTopic: async (req, res, next) => {
        try {
            const topic = req.query.topic;
            const perPage = req.query.perPage;
            const pageNo = req.query.pageNo;
            const resp = await http.get(`${BASEURL}/topics?q=${topic}`);
            const response = formatData(resp.data.items);
            searchHistoryDB.insert({
                searchKey: topic,
                searchCriteria: 'topic',
                searchValue: response
            });
            res.status(200).json(response);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

const formatData = (arr) => {
    return arr.map(element => {
        return {
            name:element.name,
            fullName: element.full_name,
            url: element.html_url,
            stars: element.stargazers_count,
            description: element.description
            
        }
    });
}

module.exports = searchController;