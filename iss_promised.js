const request = require("request-promise-native");

const fetchMyIP = function () {
  const URL = "https://api.ipify.org/?format=json";
  return request(URL);
};

const fetchCoordByIP = function (body) {
  const ip = JSON.parse(body).ip;
  const gpsURL = `http://ipwho.is/${ip}`;
  return request(gpsURL);
};

const fetchISSFlyOverTimes = function (coordinates) {
  const { latitude, longitude } = JSON.parse(coordinates);
  const issURL = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(issURL);
};

const nextISSTimesForMyLocation = function () {
  return fetchMyIP()
    .then(fetchCoordByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };
