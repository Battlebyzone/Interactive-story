$(".lightswitch").click(function(){
	$(".summary").css("visibility", "hidden");
	$(".lightswitch").css("visibility", "hidden");
	$(".dark").css("visibility", "hidden");
	$(".no-display").css("display", "initial");

	var scream = document.getElementById('screamer');
	scream.currentTime = 1;
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

