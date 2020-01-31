// npm init -y
// npm install netlify-lambda axios
const axios = require('axios');

exports.handler = function (event, context, callback) {
    const API_URL = 'https://api.github.com/users';
    const API_CLIENT_ID = 'c303eeadf5bd3e1adaa5&';
    const API_CLIENT_SECRET = 'cb2f265e819d2f7423a2c3e6f023a3f0850d1e49';

    const URL = `${API_URL}?client_id=${API_CLIENT_ID}?client_secret=${API_CLIENT_SECRET}`

    // Send users response
    const send = body => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(body)
        });
    }

    // Perform API call to github
    const getUsers = () => {
        axios.get(URL)
            .then(res => send(res.data))
            .catch(err => send(err));
    }

    // Make sure method is get
    if (event.httpMethod == "GET") {
        // Run user
        getUsers();
    }

    // const { name } = JSON.parse(event.body);

    // callback(null, {
    //     statusCode: 200,
    //     body: JSON.stringify({msg: 'Hello ' + name })
    // });
}