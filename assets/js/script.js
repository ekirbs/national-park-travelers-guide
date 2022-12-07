var parkApiKey = 'amkrsfXuAU5bolqQY0bTMOV4h2mBIOTqrRvrJVsd';

var weatherApiKey = "3044316f6126db93462603440b6cd43c";

var park;
var city;

function displayChosenPark() {
  
  // var parkCode = 'ACAD';

  var parkApiURL = `https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${parkApiKey}`;

  fetch(parkApiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

        // var activities = response.activities;

    });

}

// getParkApi();

function displayChosenCity() {
  
  var weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`;

  fetch(weatherApiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

var temperature = response.list[0].main.temp

console.log(temperature);

var windSpeed = response.list[0].wind.speed;

console.log(windSpeed);

var humidity = response.list[0].main.humidity;

console.log(humidity);

});

}

$("#acadia").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = 'ACAD';
  city = 'Bar Harbor, Maine';

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#yellow").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "YELL";
  city = "Gardiner, Montana";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#grand").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "GLCA";
  city = "Tusayan, Arizona";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#rockies").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "ROMO";
  city = "Denver, Colorado";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});



// function getWeatherApi();


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

// $(".search-btn").on("click", function (event) {
//   event.preventDefault();
//   console.log("button is working");

//   var cityName = $("#search-input").val().trim();

//   displayChosenCity();
//   displayChosenPark();

//   // cities.push(cityName);

//   // renderCards();
// });

// $(document).on('click', '#search-btn #search-history', displayChosenCity);
// $(document).on("click", ".search-btn", displayChosenCity);

// $(document).on("click", ".search-btn", displayChosenPark);

// acadia ACAD
// yellowstone YELL
// grand canyon GLCA
// rocky mountain ROMO

