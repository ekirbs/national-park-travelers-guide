var parkApiKey = 'amkrsfXuAU5bolqQY0bTMOV4h2mBIOTqrRvrJVsd';

var weatherApiKey = "3044316f6126db93462603440b6cd43c";

function getParkApi() {
  
  // var parkCode = 

  var parkApiURL = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${parkApiKey}`;

  fetch(parkApiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

        // var activities = response.

    });

}

getParkApi();

// function getWeatherApi() {
  
//   var weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${weatherApiKey}`;

//   fetch(weatherApiURL)
//     .then(function (response) {
//       return response.json();
//     })
//       .then(function (data) {
//         console.log(data)

// var temperature = response.list[0].main.temp

// console.log(temperature);

// var windSpeed = response.list[0].wind.speed;

// console.log(windSpeed);

// var humidity = response.list[0].main.humidity;

// console.log(humidity);
      
//     });

// }

// function getWeatherApi();


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });