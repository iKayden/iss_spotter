// // index.js
const { fetchISSFlyOverTimes } = require("./iss");
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
const myCoord = { latitude: "49.2827291", longitude: "-123.1207375" };
fetchISSFlyOverTimes(myCoord, (error, passTimes) => {
  if (error) {
    console.log(`It didn't work! ${error}`);
    return;
  }

  console.log(`It worked! Result: ${passTimes}`);
});
