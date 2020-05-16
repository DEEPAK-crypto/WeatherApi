var request = require("request");

request("https://api.openweathermap.org/data/2.5/weather?lat=30.4831&lon=76.595&appid=7beb6de85d3f3a28dabda1015684562f&units=metric&callback=test", function(error, response, body) {
    if (error) {
        console.log("Something went wrong!");
        console.log(error);
    } else if (response.statusCode == 200) {
        console.log(body);
    }
});