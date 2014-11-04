$("#killPets").click(function() {
	$(".frame.start-screen").css("display", "none");
	$(".frame.kill-pets").css("display", "block");
});
$("#killPetsNext").click(function() {
	$(".frame.kill-pets").css("display", "none");
	$(".frame.kill-commissioner").css("display", "block");
});
$("#startkilling").click(function() {
	$(".frame.kill-commissioner").css("display", "none");
	$(".frame.play-active").css("display", "block");
});
$("#savePets").click(function() {
	$(".frame.start-screen").css("display", "none");
	$(".frame.save-pets").css("display", "block");
});
$("#savePetsNext").click(function() {
	$(".frame.save-pets").css("display", "none");
	$(".frame.save-commissioner").css("display", "block");
});
$("#startsaving").click(function() {
	$(".frame.save-commissioner").css("display", "none");
	$(".frame.play-active").css("display", "block");
});