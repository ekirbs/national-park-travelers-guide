console.log('for github');

var apiKey = 'A9S3i3Pm3275PfUFD8eiisByBw83gq5GlQ20dgGu';

var apiURL = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

function getWeather() {
  fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
};

// function getWeather() {
//   fetch(apiURL)
//   .then(response => response.json())  // this '=>' is a promise.
//   .then(data => {
//     var {
//       sol_keys,
//       validity_checks,
//       ...solData
//     } = data
//     console.log(data);
//     console.log(solData);
//     Object.entries(solData).map([sol, data]) => {  
//       return {
//         sol: sol,
//       }
//     }
//   })
// };

getWeather();