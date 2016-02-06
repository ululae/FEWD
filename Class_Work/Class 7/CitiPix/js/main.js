$(document).ready(function() {


// when submit button is clicked run a function
$("#submit-btn").click(function() {
	event.preventDefault();
	// whatever is input in textbox (id= "city-type") is the var cityName

	var cityName = $("#city-type").val().toLowerCase();
	// or add following for lowercase: cityName = cityName.toLowerCase();
	console.log($("#city-type").val());

	// if cityName is "nyc" then  [ $("body").addclass("nyc"); ]

		//or: $("body").removeClass();

	if (cityName == "nyc" || cityName == "new york" || cityName == "new york city") {

		$("body").removeClass()
		$("body").addClass("nyc");
	}

	if (cityName == "sf" || cityName == "san fran" || cityName == "san francisco" || cityName == "bay area") {

		$("body").removeClass().addClass("sf");

	}

	if (cityName == "los angeles" || cityName == "lax" || cityName == "la") {

		$("body").removeClass().addClass("la");
	}

	if (cityName == "austin" || cityName == "atx") {

		$("body").removeClass().addClass("austin");

	} 

	if (cityName == "sydney" || cityName == "SYD") {

		$("body").removeClass().addClass("sydney");
	}
});



});


