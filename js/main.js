$("#killPets").click(function() {
	$(".frame.start-screen").removeClass("active");
	$(".frame.kill-pets").addClass("active");
});
$("#killPetsNext").click(function() {
	$(".frame.kill-pets").removeClass("active");
	$(".frame.kill-commissioner").addClass("active");
});
$("#startkilling").click(function() {
	$(".frame.kill-commissioner").removeClass("active");
	$(".frame.play-active").addClass("active");
});
$("#savePets").click(function() {
	$(".frame.start-screen").removeClass("active");
	$(".frame.save-pets").addClass("active");
});
$("#savePetsNext").click(function() {
	$(".frame.save-pets").removeClass("active");
	$(".frame.save-commissioner").addClass("active");
});
$("#startsaving").click(function() {
	$(".frame.save-commissioner").removeClass("active");
	$(".frame.play-active").addClass("active");
});
