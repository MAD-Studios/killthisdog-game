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

$( document ).ready(function() {
	//var counter = new Counter('countdown');
	var sound = new Sound();
	$('.com-type-m').click(function(){
		sound.playSound("beer_can_opening");
	})
});

function hit(hitArea, type, state){
	if($(hitArea + " .on")){
		$(".hit-targets" + hitArea).addClass(type);
		setTimeout(function() {
    		$(".hit-targets" + hitArea).removeClass(type);
    		$(".hit-targets" + hitArea).addClass(state);
    		document.getElementById('pointCount').innerHTML= parseInt(document.getElementById('pointCount').innerHTML)+parseInt($(hitArea + " .on")[0].getAttribute("data-scoreVal"));
    		setTimeout(function() {
    			$(".hit-targets" + hitArea).removeClass(state);
    			$(".hit-targets" + hitArea + " div").removeClass("on");
    			$(".hit-targets" + hitArea + " div").addClass("off");
    			createNewPet(".hit-targets" + hitArea);
			}, 1000);
		}, 1000);
	}
}

function createNewPet(hitArea){
	random = Math.ceil(Math.random() * 3);
	console.log(random);
	switch(random) {
    case 1:
        $(hitArea + " div.dog-type-l").removeClass("off");
    	$(hitArea + " div.dog-type-l").addClass("on");
        break;
    case 2:
        $(hitArea + " div.dog-type-s").removeClass("off");
    	$(hitArea + " div.dog-type-s").addClass("on");
        break;
    case 3:
        $(hitArea + " div.cat-type-m").removeClass("off");
    	$(hitArea + " div.cat-type-m").addClass("on");
        break;
    default:
        break;
	}
}

$(".hit-targets.location-dumpster").click(function() {
	hit(".location-dumpster", "hit", "kill");
});
$(".hit-targets.location-trashcan1").click(function() {
	hit(".location-trashcan1", "hit", "kill");
});
$(".hit-targets.location-trashcan2").click(function() {
	hit(".location-trashcan2", "hit", "kill");
});
$(".hit-targets.location-bag").click(function() {
	hit(".location-bag", "hit", "kill");
});
$(".hit-targets.location-manhole").click(function() {
	hit(".location-manhole", "hit", "kill");
});
$(".hit-targets.location-cardboardBox").click(function() {
	hit(".location-cardboardBox", "hit", "kill");
});
















