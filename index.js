const { nextISSTimesForMyLocation } = require("./iss");
const request = require("request");
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordByIP("66.183.245.15", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work: ", error);
//     return;
//   }

//   console.log(
//     ` +All good! Here is your geolocation: \nLatitude: ${coordinates.latitude}\nLongitude: ${coordinates.longitude}`
//   );
// });
// Latitude: 49.2827291
// Longitude: -123.1207375
// const myCoord = { latitude: "49.2827291", longitude: "-123.1207375" };
// fetchISSFlyOverTimes(myCoord, (error, passTimes) => {
//   if (error) {
//     console.log(`It didn't work! ${error}`);
//     return;
//   }

//   console.log(`It worked! Result: ${JSON.stringify(passTimes)}`);
// });
const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
printPassTimes();
