const mocha = require('mocha');
const describe = mocha.describe
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const app =require('../server');
describe('/GET searchByLanguage', () => {
    it('should return all the repos for given language', (done) => {
        chai.request(app).get('/searchByLanguage?language=java')
            .then((res) => {
                expect(res.status).to.equal(200);
                const data = res.body;
                expect(data).to.be.an('array');

                done();
            });
    }).timeout(8000);
});

describe('/GET searchByTopic', () => {
    it('Should return the topics for the search result', (done) => {
        chai.request(app).get(`/searchByTopic?topic=java`)
            .then((res) => {
                expect(res.status).to.equal(200);
                const data = res.body;
                expect(data).to.be.an('array');
                done();
            });
    }).timeout(8000);
});