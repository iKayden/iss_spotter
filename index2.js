const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    console.log(passTimes);
  })
  .catch((e) => {
    console.log(`It didn't work => ${e.message}`);
  });
