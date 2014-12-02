var mode = 'save';
var hitType = 'save';
var hitType2 = 'saved';
var counter;
var sound = new Sound();

//control variable if pet in hit-area is hit
var hitDumpster = false;
var hitTrashcan1 = false;
var hitTrashcan2 = false;
var hitBag = false;
var hitManhole = false;
var hitCardboardBox = false;

var timeDown = false;

//control variable for creating new pet after appear time is down
var controlDumpster = false;
var controlTrashcan1 = false;
var controlTrashcan2 = false;
var controlBag = false;
var controlManhole = false;
var controlCardboardBox = false;

//PetTypes for playing sounds
var dumpsterPetType;
var trashcan1PetType;
var trashcan2PetType;
var bagPetType;
var manholePetType;
var cardboardboxPetType;

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
	setHitObject("shovel");
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
	setHitObject("scissor");
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

function setHitObject(hitObject){
	$(".img.hit-type").addClass(hitObject);
	$(".img.hit-type").append("<img src=\"images/cursor_" + hitObject + ".png\" />");
}

function startGame(){
	//start Countdown and Timer
	counter = new Counter('countdown');

	//create first pet for every location 
	setTimeout(function() {
		var random = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			createNewPet(".location-dumpster");
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
    $(".location-dumpster").children("div").remove();
    $(".location-trashcan1").children("div").remove();
    $(".location-trashcan2").children("div").remove();
    $(".location-bag").children("div").remove();
    $(".location-manhole").children("div").remove();
    $(".location-cardboardBox").children("div").remove();

	timeDown = true;
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

function getControlVariable(hitArea){
	var controlVariable;
	switch (hitArea) {
		case '.location-dumpster':
			controlVariable = controlDumpster;
			break;
		case '.location-trashcan1':
			controlVariable = controlTrashcan1;
			break;
		case '.location-trashcan2':
			controlVariable = controlTrashcan2;
			break;
		case '.location-bag':
			controlVariable = controlBag;
			break;
		case '.location-manhole':
			controlVariable = controlManhole;
			break;
		case '.location-cardboardBox':
			controlVariable = controlCardboardBox;
			break;
		default:
			break;
	}
	return controlVariable;
}

function setHitVariable(hitArea){
	switch (hitArea) {
		case '.location-dumpster':
			hitDumpster = true;
			controlDumpster = true;
			break;
		case '.location-trashcan1':
			hitTrashcan1 = true;
			controlTrashcan1 = true;
			break;
		case '.location-trashcan2':
			hitTrashcan2 = true;
			controlTrashcan2 = true;
			break;
		case '.location-bag':
			hitBag = true;
			controlBag = true;
			break;
		case '.location-manhole':
			hitManhole = true;
			controlManhole = true;
			break;
		case '.location-cardboardBox':
			hitCardboardBox = true;
			controlCardboardBox = true;
			break;
		default:
			break;
	}
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

function resetControlVariable(hitArea){
	switch (hitArea) {
		case '.location-dumpster':
			controlDumpster = false;
			break;
		case '.location-trashcan1':
			controlTrashcan1 = false;
			break;
		case '.location-trashcan2':
			controlTrashcan2 = false;
			break;
		case '.location-bag':
			controlBag = false;
			break;
		case '.location-manhole':
			controlManhole = false;
			break;
		case '.location-cardboardBox':
			controlCardboardBox = false;
			break;
		default:
			break;
	}
}

function playSound(hitArea){
	switch (hitArea) {
		case '.location-dumpster':
			if(dumpsterPetType == 0){
				sound.playSound("metal_plate");
				sound.playSound("blood8");
			} else if(dumpsterPetType == 1){
				sound.playSound("metal1");
				sound.playSound("blood3");
			} else if(dumpsterPetType == 2){
				sound.playSound("metal2");
				sound.playSound("blood4");
				sound.playSound("cat4");
			}
			break;
		case '.location-trashcan1':
			if(trashcan1PetType == 0){
				sound.playSound("metal_plate");
				sound.playSound("blood8");
			} else if(trashcan1PetType == 1){
				sound.playSound("metal1");
				sound.playSound("blood3");
			} else if(trashcan1PetType == 2){
				sound.playSound("metal2");
				sound.playSound("blood4");
				sound.playSound("cat4");
			}
			break;
		case '.location-trashcan2':
			if(trashcan2PetType == 0){
				sound.playSound("metal_plate");
				sound.playSound("blood8");
			} else if(trashcan2PetType == 1){
					sound.playSound("metal1");
				sound.playSound("blood3");
			} else if(trashcan2PetType == 2){
				sound.playSound("metal2");
				sound.playSound("blood4");
				sound.playSound("cat4");
			}
			break;
		case '.location-bag':
			if(bagPetType == 0){
				sound.playSound("metal_plate");
				sound.playSound("blood8");
			} else if(bagPetType == 1){
				sound.playSound("metal1");
				sound.playSound("blood3");
			} else if(bagPetType == 2){
				sound.playSound("metal2");
				sound.playSound("blood4");
				sound.playSound("cat4");
			}
			break;
		case '.location-manhole':
			if(manholePetType == 0){
				sound.playSound("metal_plate");
				sound.playSound("blood8");
			} else if(manholePetType == 1){
				sound.playSound("metal1");
				sound.playSound("blood3");
			} else if(manholePetType == 2){
				sound.playSound("metal2");
				sound.playSound("blood4");
				sound.playSound("cat4");
			}
			break;
		case '.location-cardboardBox':
			if(cardboardboxPetType == 0){
				sound.playSound("metal_plate");
				sound.playSound("blood8");
			} else if(cardboardboxPetType == 1){
				sound.playSound("metal1");
				sound.playSound("blood3");
			} else if(cardboardboxPetType == 2){
				sound.playSound("metal2");
				sound.playSound("blood4");
				sound.playSound("cat4");
			}
			break;
		default:
			break;
	}
}

function hit(hitArea, type, state, offset){

	//set location variable 
	setHitVariable(hitArea);
	playSound(hitArea);

	var petType;
	if($(".hit-targets" + hitArea + " div").hasClass("dog-type-l")){
		petType = 0;
	}else if($(".hit-targets" + hitArea + " div").hasClass("dog-type-s")){
		petType = 1;
	}else if($(".hit-targets" + hitArea + " div").hasClass("cat-type-m")){
		petType = 2;
	}

	switch(petType){
		case 0:
			$(".hit-targets" + hitArea).children("div").remove();
			$(".hit-targets" + hitArea).append("<div class=\"img hit-dog-type-l hit-score\" data-scoreVal=\"100\"></div>");
			break;
		case 1:
			$(".hit-targets" + hitArea).children("div").remove();
			$(".hit-targets" + hitArea).append("<div class=\"img hit-dog-type-s hit-score\" data-scoreVal=\"200\"></div>");
			break;
		case 2:
			$(".hit-targets" + hitArea).children("div").remove();
			$(".hit-targets" + hitArea).append("<div class=\"img hit-cat-type-m hit-score\" data-scoreVal=\"300\"></div>");
			break;
		default:
			break;
	}

	$(".hit-targets" + hitArea).addClass(type); //depends on type of game: hit or save
	
	setTimeout(function() {
		$(".hit-targets" + hitArea).removeClass(type);
		$(".hit-targets" + hitArea).addClass(state); // depends on type of game: kill or saved
		var newScore = parseInt(document.getElementById('pointCount').innerHTML);
		if($(hitArea + " .hit-score")[0] != undefined){
			newScore += parseInt($(hitArea + " .hit-score")[0].getAttribute("data-scoreVal")); //set new score
		}
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
    			$(".hit-targets" + hitArea).children("div").remove();
    			resetHitVariable(hitArea)
    			createNewPet(hitArea);
    			$(".hit-targets" + hitArea).css("pointer-events","auto");
			}, 1000);
		}
	}, 1000);
}

function setPetType(hitArea, petType){
	switch (hitArea) {
		case '.location-dumpster':
			dumpsterPetType = petType;
			break;
		case '.location-trashcan1':
			trashcan1PetType = petType;
			break;
		case '.location-trashcan2':
			trashcan2PetType = petType;
			break;
		case '.location-bag':
			bagPetType = petType;
			break;
		case '.location-manhole':
			manholePetType = petType;
			break;
		case '.location-cardboardBox':
			cardboardboxPetType = petType;
			break;
		default:
			break;
	}
}

function createNewPet(hitArea){

	if(timeDown){
		return;
	}

	var timeout = Math.ceil(Math.random() * 5);
	setTimeout(function() {
		// random var to choose pet type
		var random = Math.ceil(Math.random() * 3);
		switch(random) {
		// large dog
	    case 1:
	        $(".hit-targets" + hitArea).append("<div class=\"img dog-type-l on\" data-scoreVal=\"100\"></div>");
	        setPetType(hitArea, 0);
	    	var appearTime = Math.ceil(Math.random() * 3);
			setTimeout(function() {
				if(!getHitVariable(hitArea) && !getControlVariable(hitArea)){
					$(".hit-targets" + hitArea).children("div").remove();
    				createNewPet(hitArea);
    			}
    			resetControlVariable(hitArea);
			}, appearTime*1000 + 2000); //time large dog appears; 1-3 seconds
	        break;
	    // small dog
	    case 2:
	    	$(".hit-targets" + hitArea).append("<div class=\"img dog-type-s on\" data-scoreVal=\"200\"></div>");
	    	var appearTime = Math.ceil(Math.random() * 2);
	    	setPetType(hitArea, 1);
			setTimeout(function() {
				if(!getHitVariable(hitArea) && !getControlVariable(hitArea)){
					$(".hit-targets" + hitArea).children("div").remove();
    				createNewPet(hitArea);
    			}
    			resetControlVariable(hitArea);
			}, appearTime*1000 + 2000); //time small dog appears; 1-2 seconds
	        break;
	    // cat
	    case 3:
	    	$(".hit-targets" + hitArea).append("<div class=\"img cat-type-m on\" data-scoreVal=\"300\"></div>");
	    	setPetType(hitArea, 2);
	    	var appearTime = Math.ceil(Math.random() * 2)-0.5;
			setTimeout(function() {
				if(!getHitVariable(hitArea) && !getControlVariable(hitArea)){
					$(".hit-targets" + hitArea).children("div").remove();
    				createNewPet(hitArea);
    			}
    			resetControlVariable(hitArea);
			}, appearTime*1000 + 2000); //time cat appears; 1-1.5 seconds
	        break;
	    default:
	        break;
		}
	}, timeout*1000);
}

$(".hit-targets.location-dumpster").on("click", "div", function(e) {
	$(".hit-targets.location-dumpster").css("pointer-events","none"); //prevent multiple actions on one pet at one location

	$( ".location-dumpster.img.hit-type" ).css({"left":e.pageX - $(".play-active").offset().left + 200 - 10,"top":e.pageY + $(".play-active").offset().top + 100 - 20});
	$( ".location-dumpster.img.hit-type" ).removeClass("off");
	$( ".location-dumpster.img.hit-type" ).addClass("on");
	$( ".location-dumpster.img.hit-type" ).animate({
	    left: "-=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-dumpster.img.hit-type" ).removeClass("on");
		$( ".location-dumpster.img.hit-type" ).addClass("off");
		hit(".location-dumpster", hitType, hitType2);
	});

	//hit(".location-dumpster", hitType, hitType2);
});
$(".hit-targets.location-trashcan1").on("click", "div", function(e) {
	$(".hit-targets.location-trashcan1").css("pointer-events","none"); //prevent multiple actions on one pet at one location

	$( ".location-trashcan1.img.hit-type" ).css({"left":e.pageX - $(".play-active").offset().left + 200 - 10,"top":e.pageY + $(".play-active").offset().top + 100 - 20});
	$( ".location-trashcan1.img.hit-type" ).removeClass("off");
	$( ".location-trashcan1.img.hit-type" ).addClass("on");
	$( ".location-trashcan1.img.hit-type" ).animate({
	    left: "-=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-trashcan1.img.hit-type" ).removeClass("on");
		$( ".location-trashcan1.img.hit-type" ).addClass("off");
		hit(".location-trashcan1", hitType, hitType2);
	});

	//hit(".location-trashcan1", hitType, hitType2);
});
$(".hit-targets.location-trashcan2").on("click", "div", function(e) {
	$(".hit-targets.location-trashcan2").css("pointer-events","none"); //prevent multiple actions on one pet at one location

	$( ".location-trashcan2.img.hit-type" ).css({"left":e.pageX - $(".play-active").offset().left + 200 - 10,"top":e.pageY + $(".play-active").offset().top + 100 - 20});
	$( ".location-trashcan2.img.hit-type" ).removeClass("off");
	$( ".location-trashcan2.img.hit-type" ).addClass("on");
	$( ".location-trashcan2.img.hit-type" ).animate({
	    left: "-=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-trashcan2.img.hit-type" ).removeClass("on");
		$( ".location-trashcan2.img.hit-type" ).addClass("off");
		hit(".location-trashcan2", hitType, hitType2);
	});

	//hit(".location-trashcan2", hitType, hitType2);
});
$(".hit-targets.location-bag").on("click", "div", function(e) {
	$(".hit-targets.location-bag").css("pointer-events","none"); //prevent multiple actions on one pet at one location

	$( ".location-bag.img.hit-type" ).css({"left":e.pageX - $(".play-active").offset().left + 200 - 10,"top":e.pageY + $(".play-active").offset().top + 100 - 20});
	$( ".location-bag.img.hit-type" ).removeClass("off");
	$( ".location-bag.img.hit-type" ).addClass("on");
	$( ".location-bag.img.hit-type" ).animate({
	    left: "-=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-bag.img.hit-type" ).removeClass("on");
		$( ".location-bag.img.hit-type" ).addClass("off");
		hit(".location-bag", hitType, hitType2);
	});

	//hit(".location-bag", hitType, hitType2);
});
$(".hit-targets.location-manhole").on("click", "div", function(e) {
	$(".hit-targets.location-manhole").css("pointer-events","none"); //prevent multiple actions on one pet at one location

	$( ".location-manhole.img.hit-type" ).css({"left":e.pageX - $(".play-active").offset().left + 200 - 10,"top":e.pageY + $(".play-active").offset().top + 100 - 20});
	$( ".location-manhole.img.hit-type" ).removeClass("off");
	$( ".location-manhole.img.hit-type" ).addClass("on");
	$( ".location-manhole.img.hit-type" ).animate({
	    left: "-=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-manhole.img.hit-type" ).removeClass("on");
		$( ".location-manhole.img.hit-type" ).addClass("off");
		hit(".location-manhole", hitType, hitType2);
	});

	//hit(".location-manhole", hitType, hitType2);
});
$(".hit-targets.location-cardboardBox").on("click", "div", function(e) {
	$(".hit-targets.location-cardboardBox").css("pointer-events","none"); //prevent multiple actions on one pet at one location

	$( ".location-cardboardBox.img.hit-type" ).css({"left":e.pageX - $(".play-active").offset().left + 200 - 10,"top":e.pageY + $(".play-active").offset().top + 100 - 20});
	$( ".location-cardboardBox.img.hit-type" ).removeClass("off");
	$( ".location-cardboardBox.img.hit-type" ).addClass("on");
	$( ".location-cardboardBox.img.hit-type" ).animate({
	    left: "-=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-cardboardBox.img.hit-type" ).removeClass("on");
		$( ".location-cardboardBox.img.hit-type" ).addClass("off");
		hit(".location-cardboardBox", hitType, hitType2);
	});

	//hit(".location-cardboardBox", hitType, hitType2);
});

function playAgain(){
	$(".location-dumpster").children("div").remove();
    $(".location-trashcan1").children("div").remove();
    $(".location-trashcan2").children("div").remove();
    $(".location-bag").children("div").remove();
    $(".location-manhole").children("div").remove();
    $(".location-cardboardBox").children("div").remove();

	timeDown = false;

	document.getElementById('pointCount').innerHTML = 0;
    document.getElementById('scoreEndKill').innerHTML = 0;
    document.getElementById('scoreEndSave').innerHTML = 0;
    document.getElementById('gameTimer').innerHTML = '01:30';
}