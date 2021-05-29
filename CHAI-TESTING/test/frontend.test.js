const chai = require('chai');
const chaiFetch = require('chai-fetch');
const mockServer = require("http-server-mock").getLocal();
const { fetchService } = require('../src/frontend');
chai.use(chaiFetch);

const { expect } = chai;

describe('fetchService', () => {

    beforeEach(() => { mockServer.start(8080) });
    afterEach(() => mockServer.stop());

    describe('fetchService', () => {
        it('fetchService', () => {
            mockServer.get('/match').thenReply(200, {
                message: "Welcome to our Bookstore!"
            })
                .then(async () => {
                    const response = await fetchService()
                    console.log('response en la peticion',response)
                    expect(response).to.be({
                        message: "Welcome to our!"
                    })
                });
        });
    });
});