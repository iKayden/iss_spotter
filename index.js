// // index.js
const { fetchCoordByIP } = require("./iss");
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

fetchCoordByIP("66.183.245.15", (error, coordinates) => {
  if (error) {
    console.log("It didn't work: ", error);
    return;
  }

  console.log(
    ` +All good! Here is your geolocation: \nLatitude: ${coordinates.latitude}\nLongitude: ${coordinates.longitude}`
  );
});
