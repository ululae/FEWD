function convertUnixTimestamp(unix_timestamp) {
	// Create a new JavaScript Date object based on the timestamp
	// multiplied by 1000 so that the argument is in milliseconds, not seconds.
	var date = new Date(unix_timestamp*1000);
	// Hours part from the timestamp
	var hours = date.getHours();
	// Minutes part from the timestamp
	var minutes = "0" + date.getMinutes();
	// Seconds part from the timestamp
	var seconds = "0" + date.getSeconds();
	// Will display time in 10:30:23 format
	var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	return date;
}

function dataLoaded(data)
{
	console.log(data);

	
	console.log("Temp: " + data.main.temp);
	$("#temp").html(data.main.temp);

	console.log("The weather is " + data.weather[0].description);
	$("#description").html(data.weather[0].description);

	console.log("The humidity is " + data.main.humidity);


	$("#sunset").html(convertUnixTimestamp(data.sys.sunset));
	$("#sunrise").html(convertUnixTimestamp(data.sys.sunrise));
}




function getWeather(event){
	event.preventDefault();
	
	$.getJSON("http://api.openweathermap.org/data/2.5/weather",
	{	appid: "44db6a862fba0b067b1930da0d769e98",
		q: $("#city").val(),
		units: $("input[name='units']:checked").val()
			}, dataLoaded);
}

$("#weather-widget").submit(getWeather);
