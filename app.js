var request = require("request");

request("https://api.openweathermap.org/data/2.5/weather?lat=30.4831&lon=76.595&appid=7beb6de85d3f3a28dabda1015684562f&units=metric", function(error, response, body) {
    if (!error && response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData);

    }

});