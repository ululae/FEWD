$(document).ready(function() {

var cities = ["nyc", "sf", "la", "austin", "sydney"];
// here, the cities array names match those of the classes in the css sheet

for (var i = 0; i < cities.length; i++){
	$("#city-type").append("<option>" + cities[i] + "</option>");
	}

$("#city-type").change(function() {
	event.preventDefault();

	var cityName = $("#city-type").val();

		$("body").removeClass()
		$("body").addClass(""+cityName);
		// by matching to the css class names, this means we can call the cityName

});

});


