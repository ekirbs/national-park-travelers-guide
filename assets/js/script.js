// GLOBAL VARIABLES
var parkApiKey = 'amkrsfXuAU5bolqQY0bTMOV4h2mBIOTqrRvrJVsd';
var weatherApiKey = "3044316f6126db93462603440b6cd43c";
var units = 'imperial';
var lang = 'en';
var lat;
var lon;
var park;
var btnSource = 1;

// TIME & SEARCH HISTORY DISPLAY FUNCTION ON PAGE LOAD
function init() {
  setInterval(function() {
    $('#currentDay').text((dayjs()).format('dddd MMM DD, YYYY [-] h:mm:ss a'));
  }, 1000);

  renderHistory();
};

init();
// $('.dropdown-trigger').dropdown();
 
$(function() {
  $('.dropdown-trigger').dropdown();
  $('.sub').dropdown({
      hover: true
    });
});

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

      lat = data.data[0].latitude.valueOf();
      lon = data.data[0].longitude.valueOf();
      console.log(lat, lon);

      var activities = data.data[0].activities;
      console.log(activities)

      var fullName = data.data[0].fullName;
      $('#park-name').append(`<h2>${fullName}</h2>`);
      var url = data.data[0].url;
      console.log(url);
      $('#park-name').append(`<a href="${url}">${url}</a>`)

      for (var i = 0; i < activities.length; i++) {
        $('#activity-card').append(data.data[0].activities[i].name + "<br/>")
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
 

      var directionsUrl = data.data[0].directionsUrl;
      console.log(directionsUrl);

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

        displayChosenCity();
    })
}

// WEATHER DISPLAY FROM HISTORY FUNCTION
function displayChosenCity() {

  $("#feature-spot").empty();

  $('#weather').empty();
  console.log(lat, lon)

  // if input is dropdown btn, use that city, else if input is history button, use data-name
  // var cityName = $("#search-input").val().trim();
  var weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=${units}&lang=${lang}`;
  // var weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=${units}&lang=${lang}`;

  fetch(weatherApiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      var featureCard = $("<div class='card feature-card zoom'>");

      var name = data.city.name;
      var city = $('<h2>').text(name);
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
        
        var weatherArticle = $(`<div id="article${count}" class="card card-alt zoom">`);
        
        $('#weather').append(weatherArticle);
  
        var dateDisplay = $('<h3>').text((dayjs()).add(i + 1, 'day').format('M/D/YYYY'));
        $(`#article${count}`).append(dateDisplay);
        
        var weatherImg = $(`<img src="http://openweathermap.org/img/w/${data.list[day + 1].weather[0].icon}.png" id="icon">`)
        $(`#article${count}`).append(weatherImg);
  
        var weatherBody = $(`<div id="weatherBody${count}" class="card-body">`)
        $(`#article${count}`).append(weatherBody);
          
        var temperature = data.list[day + 1].main.temp;          
        var tempDisplay = $('<p class="card-text">').text(`Temp: ${temperature}`);          
        $(`#weatherBody${count}`).append(tempDisplay);
          
        var windSpeed = data.list[day + 1].wind.speed;          
        var windDisplay = $('<p class="card-text">').text(`Wind Speed: ${windSpeed}`);          
        $(`#weatherBody${count}`).append(windDisplay);
          
        var humidity = data.list[day + 1].main.humidity;          
        var humidDisplay = $('<p class="card-text">').text(`Humidity: ${humidity}`);          
        $(`#weatherBody${count}`).append(humidDisplay);
          
      }        
    })
};

// GET LOCALSTORAGE OF SEARCH HISTORY FUNCTION
function getLocalNameStorage() {
  return JSON.parse(localStorage.getItem("cities")) || [];
};
function getLocalCodeStorage() {
  return JSON.parse(localStorage.getItem("code")) || [];
};

// RENDER SEARCH HISTORY FUNCTION
function renderHistory() {
      
  $('#history-spot').empty();

  var cities = getLocalNameStorage();
  var code = getLocalCodeStorage();
    
  for (i = 0; i < cities.length; i++) {
      
    var histButton = $(`<button class="hist-btn btn">`);
      
    histButton.addClass('hist-btn');

    // $(`#hist${i}`).attr('class', park);
      
    histButton.attr('data-name', cities[i]);
    histButton.attr('data-code', code[i]);
      
    histButton.text(cities[i]);
      
    $('#history-spot').append(histButton);
      
  }
};

// ON BUTTON CLICK, ADD SEARCHED CITIES TO HISTORY AND RENDER HISTORY & WEATHER
// $('.dropdown-btn').on('click', function (event) {
$('.dropdown-btn').on('click', function (event) {
          
  event.preventDefault();
        
  var code = getLocalCodeStorage();
  var cities = getLocalNameStorage();

  park = event.target.id;
  console.log(park)
  
  console.log(cities); 

  var city = event.target.innerHTML;
  console.log(city);

  if (cities.includes(city)) {
    console.log("already chosen");
  } else {
    cities.push(city);
    code.push(park);
    console.log(cities, park);
    
    if (cities.length > 5) {  
      cities.shift();
      code.shift();
    };

    localStorage.setItem("cities", JSON.stringify(cities));
    localStorage.setItem("code", JSON.stringify(code));

  };

  displayChosenPark();
  renderHistory();
})

// WEATHER DISPLAY WHEN SEARCH HISTORY IS CLICKED
$(document).on('click', '.hist-btn', function(event) {
// $(document).on('click', '.hist-btn', displayChosenPark);
// $('.hist-btn').on('click', function (event) {
          
  event.preventDefault();

  park = $(this).attr('data-code');
  console.log(park);

  displayChosenPark();
})

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
};

// DROPDOWN BUTTON CLICKS

// $("#acad").on("click", function (event) {
//   event.preventDefault();

//   park = 'ACAD';
//   city = 'Bar Harbor, Maine';

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#arch").on("click", function (event) {
//   event.preventDefault();

//   park = "ARCH";
//   city = "Moab, Utah";

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#dena").on("click", function (event) {
//   event.preventDefault();

//   park = "DENA";
//   city = "Healy, Alaska";

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#ever").on("click", function (event) {
//   event.preventDefault();

//   park = "EVER";
//   city = "Florida City, Florida";

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#glac").on("click", function (event) {
//   event.preventDefault();

//   park = "GLAC";
//   city = "Columbia Falls, Montana";

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#glca").on("click", function (event) {
//   event.preventDefault();

//   park = "GLCA";
//   city = "Tusayan, Arizona";

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#redw").on("click", function (event) {
//   event.preventDefault();

//   park = "REDW";
//   city = "Crescent City, California";

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#romo").on("click", function (event) {
//   event.preventDefault();

//   park = "ROMO";
//   city = "Denver, Colorado";

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#seki").on("click", function (event) {
//   event.preventDefault();

//   park = "SEKI";
//   city = "Visalia, California";

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#yell").on("click", function (event) {
//   event.preventDefault();

//   park = "YELL";
//   city = "Gardiner, Montana";

//   displayChosenPark();
//   displayChosenCity();

// });

// $("#yose").on("click", function (event) {
//   event.preventDefault();

//   park = "YOSE";
//   city = "Mariposa, California";

//   displayChosenPark();
//   displayChosenCity();

// });