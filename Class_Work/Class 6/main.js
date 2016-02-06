$(document).ready(function () {

	function readMore(event)
	{
			//shows what happened in console
			console.log(event);

			// Prevents the default behavior
			event.preventDefault();
	// Show the additional text

		$("#show-this-on-click").show();

	// HIde the "Read more"
		$(".readmore").hide();


}
	$(".readmore a").click(readMore);

});



	function readLess()
	{
		$("show-this-onclick").hide();



	}