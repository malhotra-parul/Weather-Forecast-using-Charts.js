const axios = require('axios');
const readlineSync = require("readline-sync");
var input = readlineSync.question("Enter city name to get updates about the weather -: ");
var uri = "http://api.openweathermap.org/data/2.5/weather?q=";
var appId = "&APPID=60eceb8192ad8884a7c8759fb9ccf81a";
axios
  .get(uri + input + appId)
  .then(response => {
    
    console.log("The Minimum temperature for "+ input +" is "+ toCelsius(response.data.main.temp_min)+" degree celsius.");
    console.log("The Maximum temperature for "+ input +" is "+ toCelsius(response.data.main.temp_max)+" degree celsius.");
    console.log("Visibility is " + response.data.visibility);

})
  .catch(error => {
    console.log(error);
});

function toCelsius(temp){
    return (temp- 273.15).toFixed(2);
}
