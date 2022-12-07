console.log('for github');

var apiKey = 'A9S3i3Pm3275PfUFD8eiisByBw83gq5GlQ20dgGu';

// var apiURL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

// function getWeather() {
//   fetch(apiURL)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
// };

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



// var cities = [];
// var searchHistory = [];

// function getWeather (event) {
//   event.preventDefault();
//   // var cityName = $("#search-input").val().trim();
//   var apiURL = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

//   // console.log(`You have searched for this city: ${cityName}`);
//   $.ajax({
//     url: apiURL,
//     method: "GET",
//   })

//   .then(function (response) {
//     console.log(response)
//     // var temperature = response.list[0].main.temp
//     // // var temperature = response.main.temp;

//     // console.log(temperature);

//     // var windSpeed = response.list[0].wind.speed;

//     // console.log(windSpeed);

//     // var humidity = response.list[0].main.humidity;

//     // console.log(humidity);
//   });

// }

// function renderCards() {
//   $("#feature-view").empty();

//   $("week-view");
// }

// $("#search-btn").on("click", function (event) {
//   event.preventDefault();
//   console.log("button is working");

//   var cityName = $("#search-input").val().trim();

//   cities.push(cityName);

//   // renderCards();
// });

// $(document).on("click", "#search-btn", displayChosenCity);