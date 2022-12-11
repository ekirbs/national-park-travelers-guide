// GLOBAL VARIABLES
var parkApiKey = 'amkrsfXuAU5bolqQY0bTMOV4h2mBIOTqrRvrJVsd';
var weatherApiKey = "3044316f6126db93462603440b6cd43c";
var units = 'imperial';
var lang = 'en';

var parks = [
  {
    parkName: 'Yellowstone',
    parkCode: "YELL",
  },
  {
    parkName: 'Acadia',
    parkCode: 'ACAD',
  },
  {
    parkName: 'The Grand Canyon',
    parkCode: 'GLCA'
  },
  {
    parkName: 'Rocky Mountain',
    parkCode: 'ROMO'
  },
  {
    parkName: 'Arches',
    parkCode: 'ARCH'
  },
  {
    parkName: 'Glacier',
    parkCode: 'GLAC'
  },
  {
    parkName: 'Yosemite',
    parkCode: 'YOSE'
  },
  {
    parkName: 'Sequoia',
    parkCode: 'SEKI'
  },

  {
    parkName: 'Redwood',
    parkCode: 'REDW'

  },
  {
    parkName: 'Everglade',
    parkcode: 'EVER'
  },

  {
    parkName: 'Denali',
    parkCode: 'DENA'
  },

]

// TIME & SEARCH HISTORY DISPLAY FUNCTION ON PAGE LOAD
function init() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM, YYYY [-] h:mm:ss a'));
  }, 1000);

  renderHistory();
};

init();

// $(document).ready(function) {
// WEATHER DISPLAY FUNCTION
function displayChosenPark() {

  $('#park-name').empty();
  $('#activity-card').empty();
  $('#park-weather-card').empty();
  $('#park-description-card').empty();
  $('#park-directions-card').empty();
  $('#contact-park').empty();
  $('#park-hours-card').empty();

  var parkApiURL = `https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${parkApiKey}`;

  fetch(parkApiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // var featureCard = $("<div>");

      var activities = data.data[0].activities;
      console.log(activities)

      var fullName = data.data[0].fullName;
      $('#park-name').append(`<h2>${fullName}</h2>`);
      var url = data.data[0].url;
      console.log(url);
      $('#park-name').append(`<a href="${url}">${url}</a>`)

      for (var i = 0; i < activities.length; i++) {
        $('#activity-card').append(data.data[0].activities[i].name)
      }

      var weatherReport = data.data[0].weatherInfo;
      $('#park-weather-card').append(weatherReport);

      var description = data.data[0].description;
      console.log(description);

      var streetName = data.data[0].addresses[0].line1;
      var city = data.data[0].addresses[0].city;
      var zip = data.data[0].addresses[0].postalCode;
      var state = data.data[0].addresses[0].stateCode;
      console.log(streetName + ' ' + city + ' ,' + zip + ' ,' + state);

      var directions = data.data[0].directionsInfo;
      // console.log(directions);

      var directionsUrl = data.data[0].directionsUrl;
      console.log(directionsUrl);

      // var activities = data.data[0].activities[0].name;
      // console.log(activities);

      var hours = data.data[0].operatingHours[0].standardHours;
      console.log(hours);

      $('#park-description-card').append("<br/>" + 'Park Description' + '<br/>' + description + "<br/>");
      $('#park-directions-card').append("<br/>" + 'Park Address' + '<br/>' + streetName + ' ' + city + ' ,' + zip + ' ,' + state + "<br/>");
      $('#park-directions-card').append("<br/>" + 'Park Direction' + '<br/>' + directions + "<br/>");
      $('#contact-park').append("<br/>" + 'Park Direction URL' + '<br/>' + directionsUrl + "<br/>");

      
      $('#park-hours-card').append("<br/>" + 'Park Hours' + '<br/>'
        + "Sunday: " + hours.sunday + "<br/>"
        + "Monday: " + hours.monday + "<br/>"
        + "Tuesday: " + hours.tuesday + "<br/>"
        + "Wednesday: " + hours.wednesday + "<br/>"
        + "Thursday: " + hours.thursday + "<br/>"
        + "Friday: " + hours.friday + "<br/>"
        + "Saturday: " + hours.saturday + "<br/>")

      // $("#park-info").append(featureCard);
    })
}

      // var images = data.data[0].images;

      // var imagesLength = images.length;

      // for (var i = 0; i < images.length; i++) {

      //   var slideContainer = $('<div class="mySlides fade">')
      //   $('.slideshow-container').append(slideContainer);

      //   var numberDiv = $('<div class="numbertext">').text(`${i + 1}/${imagesLength}`);
      //   slideContainer.append(numberDiv);

      //   var imgSrc = data.data[0].images[i].url;
      //   var img = $(`<img src="${imgSrc}" id="icon">`)
      //   // var img = $('<img>').src(`${imgSrc}`);
      //   // var img = $('<img src="data.data[0].images[i]">')  // how to source the images from the data?
      //   slideContainer.append(img);

      //   var capName = data.data[0].images[i].name;
      //   var textDiv = $('<div class="text">').text(`${capName}`);
      //   slideContainer.append(textDiv);


      //   var dotSpan = $('<span class="dot" onclick="currentSlide[i + 1]">')
      //   $('#dotContainer').append(dotSpan);
      // }



      // var featureCard = $("<div class='card feature-card zoom'>");

      // var name = data.city.name;
      // var city = $('<h1>').text(name);
      // featureCard.append(city);
        
      // var dateDisplay = $('<h2>').text((dayjs()).format('M/D/YYYY'));    
      // featureCard.append(dateDisplay);
        
      // var featureImg = $(`<img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png" id="icon">`)
      // featureCard.append(featureImg);
        
      // var featureBody = $('<div class="card-body">');
      // featureCard.append(featureBody);
        
      // var temperature = data.list[0].main.temp;      
      // var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);
      // featureBody.append(tempDisplay);
        
      // var windSpeed = data.list[0].wind.speed;      
      // var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);
      // featureBody.append(windDisplay);
        
      // var humidity = data.list[0].main.humidity;      
      // var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);
      // featureBody.append(humidDisplay);
     
      // $('#feature-spot').prepend(featureCard);

      // 5 DAY WEATHER DISPLAY LOOP
//       for (var i = 0; i < 5; i += 1) {
          
//         var day = i * 8;
//         var count = i;
//         console.log(day, count);
  
//         var weatherArticle = $(`<article id="article${count}" class="card card-alt zoom">`);
      
//         $('#weather-spot').append(weatherArticle);
  
//         var dateDisplay = $('<h3>').text((dayjs()).add(i + 1, 'day').format('M/D/YYYY'));
//         $(`#article${count}`).append(dateDisplay);
       
//         var weatherImg = $(`<img src="http://openweathermap.org/img/w/${data.list[day + 1].weather[0].icon}.png" id="icon">`)
//         $(`#article${count}`).append(weatherImg);
  
//         var weatherBody = $(`<div id="weatherBody${count}" class="card-body">`)
//         $(`#article${count}`).append(weatherBody);
          
//         var temperature = data.list[day + 1].main.temp;          
//         var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);          
//         $(`#weatherBody${count}`).append(tempDisplay);
          
//         var windSpeed = data.list[day + 1].wind.speed;          
//         var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);          
//         $(`#weatherBody${count}`).append(windDisplay);
          
//         var humidity = data.list[day + 1].main.humidity;          
//         var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);          
//         $(`#weatherBody${count}`).append(humidDisplay);
            
//       }        
//     })
// };

// WEATHER DISPLAY FROM HISTORY FUNCTION
function displayChosenCity() {


  $("#feature-spot").empty();

  $('#weather').empty();

  // if input is dropdown btn, use that city, else if input is history button, use data-name
  // var city = $(this).attr('data-name');
  // var cityName = $("#search-input").val().trim();
  var weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=${units}&lang=${lang}`;

  fetch(weatherApiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);

      // $("#weather").empty();

      // var featureCard = $("<div>");

      // var temperature = data.list[0].main.temp
      // // var tempToF = ((temperature - 273.15) * 9/5 + 32).toFixed();


      // console.log((temperature - 273.15) * 9 / 5 + 32);

      // var windSpeed = data.list[0].wind.speed;

      // console.log(windSpeed);

      // var humidity = data.list[0].main.humidity;

      // console.log(humidity + '%');

      // featureCard.append("<br/>" + temperature + " degrees F");
      // featureCard.append("<br/>" + windSpeed + " mph");
      // featureCard.append("<br/>" + humidity + "% humidity");

      // $("#weather").append(featureCard);

      var featureCard = $("<div class='card feature-card zoom'>");

      var name = data.city.name;
      var city = $('<h1>').text(name);
      featureCard.append(city);
        
      var dateDisplay = $('<h2>').text((dayjs()).format('M/D/YYYY'));    
      featureCard.append(dateDisplay);
        
      var featureImg = $(`<img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png" id="icon">`)
      featureCard.append(featureImg);
        
      var featureBody = $('<div class="card-body">');
      featureCard.append(featureBody);
        
      var temperature = data.list[0].main.temp;      
      var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);
      featureBody.append(tempDisplay);
        
      var windSpeed = data.list[0].wind.speed;      
      var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);
      featureBody.append(windDisplay);
        
      var humidity = data.list[0].main.humidity;      
      var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);
      featureBody.append(humidDisplay);
        
      $('#weather').prepend(featureCard);

      for (var i = 0; i < 5; i += 1) {
          
        var day = i * 8;
        var count = i;
        // console.log(day, count);
  
        var weatherArticle = $(`<div id="article${count}" class="card card-alt zoom">`);
        // console.log(weatherArticle);
        $('#weather').append(weatherArticle);
  
        var dateDisplay = $('<h3>').text((dayjs()).add(i + 1, 'day').format('M/D/YYYY'));
        $(`#article${count}`).append(dateDisplay);
        // console.log(dateDisplay);
        
        var weatherImg = $(`<img src="http://openweathermap.org/img/w/${data.list[day + 1].weather[0].icon}.png" id="icon">`)
        $(`#article${count}`).append(weatherImg);
        // console.log(weatherImg);
  
        var weatherBody = $(`<div id="weatherBody${count}" class="card-body">`)
        $(`#article${count}`).append(weatherBody);
        // console.log(weatherBody);
          
        var temperature = data.list[day + 1].main.temp;          
        var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);          
        $(`#weatherBody${count}`).append(tempDisplay);
        // console.log( temperature, tempDisplay);
          
        var windSpeed = data.list[day + 1].wind.speed;          
        var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);          
        $(`#weatherBody${count}`).append(windDisplay);
        // console.log (windSpeed, windDisplay);
          
        var humidity = data.list[day + 1].main.humidity;          
        var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);          
        $(`#weatherBody${count}`).append(humidDisplay);
        // console.log(humidity, humidDisplay);
          
      }        

    })
};

// GET LOCALSTORAGE OF SEARCH HISTORY FUNCTION
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("cities")) || [];
};

// RENDER SEARCH HISTORY FUNCTION
function renderHistory() {
      
  $('#history-spot').empty();

  $('#feature-spot').empty();

  $('#weather-spot').empty();

  var cities = JSON.parse(localStorage.getItem('cities')) || [];    
    
  for (i = 0; i < cities.length; i++) {
      
    var histButton = $('<button class="hist-btn btn btn-outline-dark">');
      
    histButton.addClass('btn hist-btn');
      
    histButton.attr('data-name', cities[i]);
      
    histButton.text(cities[i]);
      
    $('#history-spot').append(histButton);
      
  }
};

// ON BUTTON CLICK, ADD SEARCHED CITIES TO HISTORY AND RENDER HISTORY & WEATHER
$('.dropdown-btn-btn').on('click', function (event) {
          
  event.preventDefault();
        
  var cities = getLocalStorage();
  
  console.log(cities);
 
  var cityName = $("#search-input").val().trim();
  console.log(cityName);
  
  if (cities.includes(cityName)) {
    console.log("already chosen");
  } else {
    cities.push(cityName);
    console.log(cities);
    
    if (cities.length > 5) {  
      cities.sort();
    };

    localStorage.setItem("cities", JSON.stringify(cities));
  };
  
  renderHistory();
  displayChosenCity();
})

// WEATHER DDISPLAY WHEN SEARCH HISTORY IS CLICKED
$(document).on('click', '.hist-btn', displayChosenCity);

$('.dropdown-trigger').dropdown();

let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

$("#acad").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = 'ACAD';
  city = 'Bar Harbor, Maine';

  displayChosenPark();
  displayChosenCity();

  let div = document.createElement("div")
  let p = document.createElement("p")
  div.append("Some text", p)

  console.log(div.childNodes) // NodeList [ #text "Some text", <p>
  // cities.push(cityName);

  // renderCards();
});

$("#arch").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "ARCH";
  city = "Moab,Utah";

  displayChosenPark();
  displayChosenCity();

  // cities.push(cityName);

  // renderCards();
});

$("#dena").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "DENA";
  city = "Healy, Alaska";

  displayChosenPark();
  displayChosenCity();

  // cities.push(cityName);

  // renderCards();
});

$("#ever").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "EVER";
  city = "Everglades City, Florida";

  displayChosenPark();
  displayChosenCity();

  // cities.push(cityName);

  // renderCards();
});

$("#glac").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "GLAC";
  city = "Columbia Falls, Montana";

  displayChosenPark();
  displayChosenCity();

  // cities.push(cityName);

  // renderCards();
});

$("#glca").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "GLCA";
  city = "Tusayan, Arizona";

  displayChosenPark();
  displayChosenCity();

  // cities.push(cityName);

  // renderCards();
});

$("#redw").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "REDW";
  city = "Crescent City, California";

  displayChosenPark();
  displayChosenCity();

  // cities.push(cityName);

  // renderCards();
});

$("#romo").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "ROMO";
  city = "Denver, Colorado";

  displayChosenPark();
  displayChosenCity();

  // cities.push(cityName);

  // renderCards();
});

$("#seki").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "SEKI";
  city = "Visalia,California";

  displayChosenPark();
  displayChosenCity();

  // cities.push(cityName);

  // renderCards();
});

$("#yell").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "YELL";
  city = "Gardiner, Montana";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#yose").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "YOSE";
  city = "Mariposa, California";

  displayChosenPark();
  displayChosenCity();

  // cities.push(cityName);

  // renderCards();
});

$(".dropdown-trigger").dropdown();

// }