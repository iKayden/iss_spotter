const request = require("request");
const URL = "https://api.ipify.org/?format=json";

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request(URL, (error, response, body) => {
    if (error) {
      console.log(`There was an error ===> ${error}`);
      callback(error, null);
    } else {
      const myIP = JSON.parse(body).ip;
      callback(null, myIP);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  });
};
// fetchMyIP();
module.exports = { fetchMyIP };
