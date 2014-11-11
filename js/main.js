var mode = 'save';
var counter;

$("#killPets").click(function() {
	mode = 'kill';
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
	startGame();
});
$("#savePets").click(function() {
	mode = 'save';
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
	startGame();
});
$("#killScore").click(function() {
	$(".frame.kill-score").removeClass("active");
	$(".frame.share").addClass("active");
});
$("#saveScore").click(function() {
	$(".frame.save-score").removeClass("active");
	$(".frame.share").addClass("active");
});
$("#playAgain").click(function() {
	playAgain();
	$(".frame.share").removeClass("active");
	$(".frame.play-active").addClass("active");
	startGame();
});

var sound = new Sound();

$( document ).ready(function() {	
});

function startGame(){
	counter = new Counter('countdown');

	$(".hit-targets.location-dumpster").css("pointer-events","none");
	$(".hit-targets.location-trashcan1").css("pointer-events","none");
	$(".hit-targets.location-trashcan2").css("pointer-events","none");
	$(".hit-targets.location-bag").css("pointer-events","none");
	$(".hit-targets.location-manhole").css("pointer-events","none");
	$(".hit-targets.location-cardboardBox").css("pointer-events","none");

	setTimeout(function() {
		var random = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".hit-targets.location-dumpster");
		}, random*1000);

		var random2 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".hit-targets.location-trashcan1");
		}, random2*1000);

		var random3 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".hit-targets.location-trashcan2");
		}, random3*1000);

		var random4 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".hit-targets.location-bag");
		}, random4*1000);

		var random5 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".hit-targets.location-manhole");
		}, random5*1000);

		var random6 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".hit-targets.location-cardboardBox");
		}, random6*1000);
	}, 4000);
	
}

function endGame(){
	$(".hit-targets.location-dumpster").css("pointer-events","none");
	$(".hit-targets.location-trashcan1").css("pointer-events","none");
	$(".hit-targets.location-trashcan2").css("pointer-events","none");
	$(".hit-targets.location-bag").css("pointer-events","none");
	$(".hit-targets.location-manhole").css("pointer-events","none");
	$(".hit-targets.location-cardboardBox").css("pointer-events","none");
}

function hit(hitArea, type, state){
	if($(hitArea + " .on")){
		$(".hit-targets" + hitArea).addClass(type);
		$(".hit-targets" + hitArea).css("pointer-events","none");
		setTimeout(function() {
    		$(".hit-targets" + hitArea).removeClass(type);
    		$(".hit-targets" + hitArea).addClass(state);
    		var newScore = parseInt(document.getElementById('pointCount').innerHTML)+parseInt($(hitArea + " .on")[0].getAttribute("data-scoreVal"));
    		if(newScore >= 20000){
    			document.getElementById('pointCount').innerHTML = 20000;
    			endGame();
    			setTimeout(function() {
					$(".frame.play-active").removeClass("active");
	    			if(mode == 'kill'){
						$(".frame.kill-score").addClass("active");
					}else{
						$(".frame.save-score").addClass("active");
					}
				}, 1000);
    			
    		}else{
    			document.getElementById('pointCount').innerHTML = newScore;
    			if(mode == 'kill'){
    				document.getElementById('scoreEndKill').innerHTML = newScore;
    			}else{
    				document.getElementById('scoreEndSave').innerHTML = newScore;
    			}
    		}
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
	var timeout = Math.ceil(Math.random() * 5);
	setTimeout(function() {
		random = Math.ceil(Math.random() * 3);
		console.log(random);
		switch(random) {
	    case 1:
	        $(hitArea + " div.dog-type-l").removeClass("off");
	    	$(hitArea + " div.dog-type-l").addClass("on");
	    	setTimeout(function() {
    			$(".hit-targets" + hitArea).css("pointer-events","auto");
			}, 2000);
	        break;
	    case 2:
	        $(hitArea + " div.dog-type-s").removeClass("off");
	    	$(hitArea + " div.dog-type-s").addClass("on");
	    	setTimeout(function() {
    			$(".hit-targets" + hitArea).css("pointer-events","auto");
			}, 2000);
	        break;
	    case 3:
	        $(hitArea + " div.cat-type-m").removeClass("off");
	    	$(hitArea + " div.cat-type-m").addClass("on");
	    	setTimeout(function() {
    			$(".hit-targets" + hitArea).css("pointer-events","auto");
			}, 2000);
	        break;
	    default:
	        break;
		}
	}, timeout*1000);
}

$(".hit-targets.location-dumpster").click(function() {
	hit(".location-dumpster", "hit", "kill");
	sound.playSound("metal_plate");
});
$(".hit-targets.location-trashcan1").click(function() {
	hit(".location-trashcan1", "hit", "kill");
	sound.playSound("metal_plate");
});
$(".hit-targets.location-trashcan2").click(function() {
	hit(".location-trashcan2", "hit", "kill");
	sound.playSound("metal_plate");
});
$(".hit-targets.location-bag").click(function() {
	hit(".location-bag", "hit", "kill");
	sound.playSound("metal_plate");
});
$(".hit-targets.location-manhole").click(function() {
	hit(".location-manhole", "hit", "kill");
	sound.playSound("metal_plate");
});
$(".hit-targets.location-cardboardBox").click(function() {
	hit(".location-cardboardBox", "hit", "kill");
	sound.playSound("metal_plate");
});

function playAgain(){
	$("div.dog-type-l").removeClass("on");
	$("div.dog-type-l").addClass("off");

	$("div.dog-type-s").removeClass("on");
	$("div.dog-type-s").addClass("off");

	$("div.cat-type-m").removeClass("on");
	$("div.cat-type-m").addClass("off");

	document.getElementById('pointCount').innerHTML = 0;
    document.getElementById('scoreEndKill').innerHTML = 0;
    document.getElementById('scoreEndSave').innerHTML = 0;

    document.getElementById('gameTimer').innerHTML = '01:30';

	//startGame();
}














