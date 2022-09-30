const request = require("request");

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  const URL = "https://api.ipify.org/?format=json";
  request(URL, (error, response, body) => {
    if (error) {
      console.log(`There was an error ===> ${error}`);
      callback(error, null);
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;

      const myIP = JSON.parse(body).ip;
      callback(null, myIP);
    }
  });
};

const fetchCoordByIP = function (ip, callback) {
  const geoCoord = `http://ipwho.is/${ip}`;
  request(geoCoord, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const parsedBody = JSON.parse(body);

    if (!parsedBody.success) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = parsedBody;
    callback(null, { latitude, longitude });
  });
};

const fetchISSFlyOverTimes = function (coords, callback) {
  const apiURL = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  request(apiURL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(
        Error(`Status Code ${response.statusCode} when fetching IP: ${body}`),
        null
      );
      return;
    }

    const data = JSON.parse(body).response;
    console.log(data);
    callback(null, data);
  });
};

const nextISSTimesForMyLocation = function (callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }
      fetchISSFlyOverTimes(loc, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, nextPasses);
      });
    });
  });
};
module.exports = { nextISSTimesForMyLocation };

// http://ipwho.is/66.183.245.15
