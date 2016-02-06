//When I press enter
//$("#newEntry").keypress(function(event) {
	//If it is the enter key
//	console.log(event.which);
	
//	if (event.keyCode === 13)
	//{
		
		// Call addtoTotal
$("#entry").submit(addToTotal);

var total = 0;
function addToTotal(event)
{
	event.preventDefault();
	//Get the number from the textbox
	var number = parseFloat($("#newEntry").val());
	
	//Clear the textbox
	$("newEntry").val("")

	// Add it to the total
	total = total + number;
	alert(total);

	$("#entries").append("<tr><td></td><td>" +number+ "</td></tr>");
	
	// Old Line Div
	// var currentNumber = $("#line").html();	
	// var string = (""+ number + ", " +currentNumber);
	// $("#line").html(string);

	// Print out the new total 
	$("#total").html(total);

}



	// Create new li element in tbody "entries"
	//$("#entries").append(<li> "number" </li>) 


	



