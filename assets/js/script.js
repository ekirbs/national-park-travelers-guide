console.log('for github');

var apiKey = 'A9S3i3Pm3275PfUFD8eiisByBw83gq5GlQ20dgGu';


// connect to weather api and get weather for last 7 days

function getApi() {
  
  var apiURL = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}

getApi();

// fetchButton.addEventListener('click', getApi);

// function getWeather() {
//   var apiURL = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;
//   fetch(apiURL)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
// };

// getWeather();

// function marsWeather() {

//   $.ajax({
//     url: apiURL,
//     method: "GET",
//   })

//   .then(function (response) {
//     console.log(response)
//   })

    // var temperature = response.list[0].main.temp

    // console.log(temperature);

    // var windSpeed = response.list[0].wind.speed;

    // console.log(windSpeed);

    // var humidity = response.list[0].main.humidity;

    // console.log(humidity);  

// }

// $(document).on("click", "#search-btn", marsWeather);


// connect to the rover api and get carousel of pictures















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
//   var cityName = $("#search-input").val().trim();
//   var apiURL = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

//   console.log(`You have searched for this city: ${cityName}`);
//   $.ajax({
//     url: apiURL,
//     method: "GET",
//   })

//   .then(function (response) {
//     console.log(response)
//     var temperature = response.list[0].main.temp

//     console.log(temperature);

//     var windSpeed = response.list[0].wind.speed;

//     console.log(windSpeed);

//     var humidity = response.list[0].main.humidity;

//     console.log(humidity);
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

//   renderCards();
// });

// $(document).on("click", "#search-btn", getWeather);

// getWeather();