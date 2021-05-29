const fetch = require('node-fetch');

const fetchService = async () => {
    let response = null;
    let json = null;
    try {
        response = await fetch('http://localhost:8080/match')
        json = await response.json()
    } catch (err) {
        console.log(err)
    }
    return json
}

fetchService()

exports.module = {
    fetchService
}