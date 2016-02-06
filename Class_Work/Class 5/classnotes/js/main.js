// when page has loaded
$(document).ready(function() {
	// Hide paragraphs in the FAQ
	$("#faq p").hide();
	

	$("#faq h2").click(showAnswer);

	//$("#faq h2").eq(0).click(showQ1);
	//$("#faq h2").eq(1).click(showQ2);
	//$("#faq h2").eq(2).click(showQ3);
	//$("#faq h2").eq(3).click(showQ4);
	
	function showAnswer()
	{
		$(this).next().slideToggle();
	}
	//function showQ1() {
	//	$("#answer1").slideToggle();
	//}
	//function showQ2() {
	//	$("#answer2").slideToggle();
	//}
	//function showQ3() {
	//	$("#answer3").slideToggle();
	//}
	//function showQ4() {
	//	$("#answer4").slideToggle();
	//}
	
});
// we also have .show, .hide, .toggle


