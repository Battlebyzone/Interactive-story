$(document).ready(function(){
	var scream = document.getElementById('screamer');
	$(".hidden-p").delay(2600).fadeIn(1000);
	$(".visible-p").delay(3100).fadeOut(1000);
	$(".lightswitch").click(function(){
		$(".summary").css("visibility", "hidden");
		$(".lightswitch").css("visibility", "hidden");
		$(".dark").css("visibility", "hidden");
		$(".no-display").css("display", "initial");

		scream.play();
		setTimeout(updateBox, 2600);

		function updateBox(){
			$(".hidden-box").css("visibility", "visible");
		}
	});

	$(".hint").mouseenter(function(){
		$(".description").css("visibility", "visible");
	});

	$(".hint").mouseleave(function(){
		$(".description").css("visibility", "hidden");
	});
});

