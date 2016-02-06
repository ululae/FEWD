$(document).ready(function() {

	$(".readmore").click(showMore);
		
		function showMore(event){
			event.preventDefault();
			$("#show-this-on-click").removeClass("hide");
			//$(".readless").removeClass("hide");
			$(".readless").removeClass("hide");
			$(".readmore").addClass("hide");
		}
	$(".readless").click(showLess);

		function showLess(event){
			event.preventDefault();
			$("#show-this-on-click").addClass("hide");
			//$("#show-this-onclick").slideToggle();
			$(".readless").addClass("hide");
			$(".readmore").removeClass("hide");
		}

		

		






});