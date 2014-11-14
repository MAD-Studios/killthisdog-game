var mode = 'save';
var hitType = 'save';
var hitType2 = 'saved';
var counter;
var sound = new Sound();
var hitDumpster = false;
var hitTrashcan1 = false;
var hitTrashcan2 = false;
var hitBag = false;
var hitManhole = false;
var hitCardboardBox = false;
var timeDown = false;
var randomDumpster;
var randomTrashcan1;
var randomTrashcan2;
var randomBag;
var randomManhole;
var randomCardboardBox;
var dumpster;

$("#killPets").click(function() {
	mode = 'kill';
	hitType = 'hit';
	hitType2 = 'kill';
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
	hitType = 'save';
	hitType2 = 'saved';
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

function startGame(){
	//start Countdown and Timer
	counter = new Counter('countdown');

	//prevent action on clicking on hit-targer area when no pet is shown
	$(".hit-targets.location-dumpster").css("pointer-events","none");
	$(".hit-targets.location-trashcan1").css("pointer-events","none");
	$(".hit-targets.location-trashcan2").css("pointer-events","none");
	$(".hit-targets.location-bag").css("pointer-events","none");
	$(".hit-targets.location-manhole").css("pointer-events","none");
	$(".hit-targets.location-cardboardBox").css("pointer-events","none");

	//create first pet for every location 
	setTimeout(function() {
		var random = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			//createNewPet(".location-dumpster");
			dumpster = new Dumpster();
			dumpster.createPet();
			dumpster.destroyPet();

		}, random*1000);

		var random2 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".location-trashcan1");
		}, random2*1000);

		var random3 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".location-trashcan2");
		}, random3*1000);

		var random4 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".location-bag");
		}, random4*1000);

		var random5 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".location-manhole");
		}, random5*1000);

		var random6 = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".location-cardboardBox");
		}, random6*1000);
	}, 4000);
	
}

function endGame(){
	//prevent action on clicking on hit-target area when time is down
	$(".hit-targets.location-dumpster").css("pointer-events","none");
	$(".hit-targets.location-trashcan1").css("pointer-events","none");
	$(".hit-targets.location-trashcan2").css("pointer-events","none");
	$(".hit-targets.location-bag").css("pointer-events","none");
	$(".hit-targets.location-manhole").css("pointer-events","none");
	$(".hit-targets.location-cardboardBox").css("pointer-events","none");

	var allActiveDogsL = $(".dog-type-l");
	//console.log(allActiveDogsL);
	for (var i = 0; i < allActiveDogsL.length; i++) {
		//console.log(allActiveDogsL[i]);
        $(allActiveDogsL[i]).removeClass("on");
        $(allActiveDogsL[i]).addClass("off");
        //console.log(allActiveDogsL[i]);
    }
	var allActiveDogsS = $(".dog-type-s");
	//console.log(allActiveDogsS);
	for (var j = 0; j < allActiveDogsS.length; j++) {
		//console.log(allActiveDogsS[j]);
        $(allActiveDogsS[j]).removeClass("on");
        $(allActiveDogsS[j]).addClass("off");
		//console.log(allActiveDogsS[j]);
    }
	var allActiveCatsM = $(".cat-type-m");
	//console.log(allActiveCatsM);
	for (var p = 0; p < allActiveCatsM.length; p++) {
		//console.log(allActiveCatsM[p]);
        $(allActiveCatsM[p]).removeClass("on");
        $(allActiveCatsM[p]).addClass("off");
        //console.log(allActiveCatsM[p]);
    }

	// $("div.dog-type-l").removeClass("on");
	// $("div.dog-type-l").addClass("off");

	// $("div.dog-type-s").removeClass("on");
	// $("div.dog-type-s").addClass("off");

	// $("div.cat-type-m").removeClass("on");
	// $("div.cat-type-m").addClass("off");

	timeDown = true;
}

function hitPet(offset){
	
	//console.log(offset);

}

function hit(hitArea, type, state, offset){
	
	if($(hitArea + " div").hasClass("on")){

		hitPet(offset);

		//set location variable 
		switch (hitArea) {
			case '.location-dumpster':
				hitDumpster = true;
				break;
			case '.location-trashcan1':
				hitTrashcan1 = true;
				break;
			case '.location-trashcan2':
				hitTrashcan2 = true;
				break;
			case '.location-bag':
				hitBag = true;
				break;
			case '.location-manhole':
				hitManhole = true;
				break;
			case '.location-cardboardBox':
				hitCardboardBox = true;
				break;
			default:
				break;
		}

		$(".hit-targets" + hitArea).css("pointer-events","none"); //prevent multiple actions on one pet
		$(".hit-targets" + hitArea).addClass(type); //depends on type of game: hit or save
		setTimeout(function() {
    		$(".hit-targets" + hitArea).removeClass(type);
    		$(".hit-targets" + hitArea).addClass(state); // depends on type of game: kill or saved
    		var newScore = parseInt(document.getElementById('pointCount').innerHTML)+parseInt($(hitArea + " .on")[0].getAttribute("data-scoreVal")); //set new score
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
				}, 2000);
    		}else{
    			document.getElementById('pointCount').innerHTML = newScore;
    			if(mode == 'kill'){
    				document.getElementById('scoreEndKill').innerHTML = newScore;
    			}else{
    				document.getElementById('scoreEndSave').innerHTML = newScore;
    			}
    			setTimeout(function() {
	    			$(".hit-targets" + hitArea).removeClass(state);
	    			$(".hit-targets" + hitArea + " div").removeClass("on");
	    			$(".hit-targets" + hitArea + " div").addClass("off"); 
	    			createNewPet(hitArea);
				}, 1000);
    		}
    		
		}, 1000);
	}
}

function getHitVariable(hitArea){
	var hitVariable;
	switch (hitArea) {
		case '.location-dumpster':
			hitVariable = hitDumpster;
			break;
		case '.location-trashcan1':
			hitVariable = hitTrashcan1;
			break;
		case '.location-trashcan2':
			hitVariable = hitTrashcan2;
			break;
		case '.location-bag':
			hitVariable = hitBag;
			break;
		case '.location-manhole':
			hitVariable = hitManhole;
			break;
		case '.location-cardboardBox':
			hitVariable = hitCardboardBox;
			break;
		default:
			break;
	}
	return hitVariable;
}

function resetHitVariable(hitArea){
	switch (hitArea) {
		case '.location-dumpster':
			hitDumpster = false;
			break;
		case '.location-trashcan1':
			hitTrashcan1 = false;
			break;
		case '.location-trashcan2':
			hitTrashcan2 = false;
			break;
		case '.location-bag':
			hitBag = false;
			break;
		case '.location-manhole':
			hitManhole = false;
			break;
		case '.location-cardboardBox':
			hitCardboardBox = false;
			break;
		default:
			break;
	}
}

function createNewPet(hitArea){
	//console.log($(hitArea + " div"));
	var checkPetAvailable = $(hitArea + " div");
	var hasPet = false;
	for (var i=0; i<checkPetAvailable.length; i++){
		//console.log(checkPetAvailable[i])
		/*if(checkPetAvailable[i].indexOf(".on") > 0){
			hasPet = true;
		}*/
	}
	//if(!$(hitArea + " div").hasClass("on")){
	if(!hasPet){
	resetHitVariable(hitArea);
	var timeout = Math.ceil(Math.random() * 5);
	setTimeout(function() {
		var random = Math.ceil(Math.random() * 3);
		switch(random) {
	    case 1:
	    	//console.log($(hitArea + " div.dog-type-l"));
	        $(hitArea + " div.dog-type-l").removeClass("off");
	    	$(hitArea + " div.dog-type-l").addClass("on");
	    	var appearTime = Math.ceil(Math.random() * 3);
	    	setTimeout(function() {
    			$(".hit-targets" + hitArea).css("pointer-events","auto"); //make hit area clickable
    			setTimeout(function() {
    				if(!getHitVariable(hitArea) && !timeDown){
    					$(".hit-targets" + hitArea).css("pointer-events","off");
    					$(hitArea + " div.dog-type-l").removeClass("on");
	    				$(hitArea + " div.dog-type-l").addClass("off");
	    				createNewPet(hitArea);
	    			}
				}, appearTime*1000); //time large dog appears; 1-3 seconds
			}, 2000); //animation time
	        break;
	    case 2:
	    	//console.log($(hitArea + " div.dog-type-s"));
	        $(hitArea + " div.dog-type-s").removeClass("off");
	    	$(hitArea + " div.dog-type-s").addClass("on");
	    	var appearTime = Math.ceil(Math.random() * 2);
	    	setTimeout(function() {
    			$(".hit-targets" + hitArea).css("pointer-events","auto"); //make hit area clickable
    			setTimeout(function() {
    				if(!getHitVariable(hitArea) && !timeDown){
	    				$(".hit-targets" + hitArea).css("pointer-events","off");
	    				$(hitArea + " div.dog-type-s").removeClass("on");
		    			$(hitArea + " div.dog-type-s").addClass("off");
		    			createNewPet(hitArea);
		    		}
				}, appearTime*1000); //time small dog appears; 1-2 seconds
			}, 2000); //animation time
	        break;
	    case 3:
	    	//console.log($(hitArea + " div.cat-type-m"));
	        $(hitArea + " div.cat-type-m").removeClass("off");
	    	$(hitArea + " div.cat-type-m").addClass("on");
	    	var appearTime = Math.ceil(Math.random() * 2)-0.5;
	    	setTimeout(function() {
    			$(".hit-targets" + hitArea).css("pointer-events","auto"); //make hit area clickable
    			setTimeout(function() {
    				if(!getHitVariable(hitArea) && !timeDown){
	    				$(".hit-targets" + hitArea).css("pointer-events","off");
	    				$(hitArea + " div.cat-type-m").removeClass("on");
		    			$(hitArea + " div.cat-type-m").addClass("off");
		    			createNewPet(hitArea);
		    		}
				}, appearTime*1000);//time cat appears; 0.5-1.5 seconds
			}, 2000); //animation time
	        break;
	    default:
	        break;
		}
	}, timeout*1000);
	}
}

$(".hit-targets.location-dumpster").click(function() {
	hit(".location-dumpster", hitType, hitType2);
	sound.playSound("metal_plate");
});
$(".hit-targets.location-trashcan1").click(function() {
	hit(".location-trashcan1", hitType, hitType2);
	sound.playSound("metal_plate");
});
$(".hit-targets.location-trashcan2").click(function() {
	hit(".location-trashcan2", hitType, hitType2);
	sound.playSound("metal_plate");
});
$(".hit-targets.location-bag").click(function() {
	var offset = $(this).offset();
	hit(".location-bag", hitType, hitType2, offset);
	sound.playSound("metal_plate");
});
$(".hit-targets.location-manhole").click(function() {
	hit(".location-manhole", hitType, hitType2);
	sound.playSound("metal_plate");
});
$(".hit-targets.location-cardboardBox").click(function() {
	hit(".location-cardboardBox", hitType, hitType2);
	sound.playSound("metal_plate");
});

function playAgain(){
	$("div.dog-type-l").removeClass("on");
	$("div.dog-type-l").addClass("off");

	$("div.dog-type-s").removeClass("on");
	$("div.dog-type-s").addClass("off");

	$("div.cat-type-m").removeClass("on");
	$("div.cat-type-m").addClass("off");

	timeDown = false;

	document.getElementById('pointCount').innerHTML = 0;
    document.getElementById('scoreEndKill').innerHTML = 0;
    document.getElementById('scoreEndSave').innerHTML = 0;

    document.getElementById('gameTimer').innerHTML = '01:30';
}