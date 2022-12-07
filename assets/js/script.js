var parkApiKey = 'amkrsfXuAU5bolqQY0bTMOV4h2mBIOTqrRvrJVsd';

var weatherApiKey = "3044316f6126db93462603440b6cd43c";

function getParkApi() {
  
  var parkApiURL = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${parkApiKey}`;

  fetch(parkApiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

    });

}

getParkApi();

function getWeatherApi() {
  
  var weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

  fetch(weatherApiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)
      
    });

}

function getWeatherApi();


// connect to the rover api and get carousel of pictures


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

  