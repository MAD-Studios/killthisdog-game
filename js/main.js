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

var dumpsterPetType;
var trashcan1PetType;
var trashcan2PetType;
var bagPetType;
var manholePetType;
var cardboardboxPetType;

var appearTimeDumpster;
var appearTimeTrashcan1;
var appearTimeTrashcan2;
var appearTimeBag;
var appearTimeManhole;
var appearTimeCardboardBox;


var pet;

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
	setHitObject("shuffle");
	startGame();
});
$("#savePets").click(function() {
	mode = 'save';
	hitType = 'save';
	hitType2 = 'saved';lass("active");
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
	setHitObject("cutter");
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
}

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
	//prevent action on clicking on hit-target area when time is down
	$(".hit-targets.location-dumpster").css("pointer-events","none");
	$(".hit-targets.location-trashcan1").css("pointer-events","none");
	$(".hit-targets.location-trashcan2").css("pointer-events","none");
	$(".hit-targets.location-bag").css("pointer-events","none");
	$(".hit-targets.location-manhole").css("pointer-events","none");
	$(".hit-targets.location-cardboardBox").css("pointer-events","none");

	var allActiveDogsL = $(".dog-type-l");
	for (var i = 0; i < allActiveDogsL.length; i++) {
        $(allActiveDogsL[i]).removeClass("on");
        $(allActiveDogsL[i]).addClass("off");
    }
	var allActiveDogsS = $(".dog-type-s");
	for (var j = 0; j < allActiveDogsS.length; j++) {
        $(allActiveDogsS[j]).removeClass("on");
        $(allActiveDogsS[j]).addClass("off");
    }
	var allActiveCatsM = $(".cat-type-m");
	for (var p = 0; p < allActiveCatsM.length; p++) {
        $(allActiveCatsM[p]).removeClass("on");
        $(allActiveCatsM[p]).addClass("off");
    }

	// $("div.dog-type-l").removeClass("on");
	// $("div.dog-type-l").addClass("off");

	// $("div.dog-type-s").removeClass("on");
	// $("div.dog-type-s").addClass("off");

	// $("div.cat-type-m").removeClass("on");
	// $("div.cat-type-m").addClass("off");

	timeDown = true;
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

	//console.log($(hitArea + " div").hasClass("on"));
	
	if($(hitArea + " div").hasClass("on")){

		//set location variable 
		setHitVariable(hitArea);
		playSound(hitArea);
	
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
	    			console.log("create Pet at: " + hitArea + " after hit");
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

function setHitVariable(hitArea){
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

	var checkPetAvailable = $(hitArea + " div");
	var hasPet = false;
	for (var i=0; i<checkPetAvailable.length; i++){
		if($(checkPetAvailable[i]).hasClass('on')){
			hasPet = true;
		}
	}

	if(timeDown){
		return;
	}

	if(!hasPet){
		resetHitVariable(hitArea);
		var timeout = Math.ceil(Math.random() * 5);
		setTimeout(function() {
			var random = Math.ceil(Math.random() * 3);
			switch(random) {
		    case 1:
		     	setPetType(hitArea, 0);
		     	//console.log("create Pet: "+ hitArea);
		        $(hitArea + " div.dog-type-l").removeClass("off");
		    	$(hitArea + " div.dog-type-l").addClass("on");
		    	var appearTime = Math.ceil(Math.random() * 3);
		    	setTimeout(function() {
	    			$(".hit-targets" + hitArea).css("pointer-events","auto"); //make hit area clickable
	    			setTimeout(function() {
	    				console.log("hitvariable: "+ getHitVariable(hitArea) + " " + hitArea);
	    				if(!getHitVariable(hitArea)){
	    					//console.log("time down");
	    					$(".hit-targets" + hitArea).css("pointer-events","off");
	    					$(hitArea + " div.dog-type-l").removeClass("on");
		    				$(hitArea + " div.dog-type-l").addClass("off");
		    				console.log("create Pet at: " + hitArea + " after timeDown");
		    				createNewPet(hitArea);
		    			}
					}, appearTime*1000); //time large dog appears; 1-3 seconds
				}, 2000); //animation timeout
		        break;
		    case 2:
		    	setPetType(hitArea, 1);
		    	//console.log("create Pet: "+ hitArea);
		        $(hitArea + " div.dog-type-s").removeClass("off");
		    	$(hitArea + " div.dog-type-s").addClass("on");
		    	var appearTime2 = Math.ceil(Math.random() * 2);
		    	setTimeout(function() {
	    			$(".hit-targets" + hitArea).css("pointer-events","auto"); //make hit area clickable
	    			setTimeout(function() {
	    				console.log("hitvariable: "+ getHitVariable(hitArea) + " " + hitArea);
	    				if(!getHitVariable(hitArea)){
	    					//console.log("time down");
		    				$(".hit-targets" + hitArea).css("pointer-events","off");
		    				$(hitArea + " div.dog-type-s").removeClass("on");
			    			$(hitArea + " div.dog-type-s").addClass("off");
			    			console.log("create Pet at: " + hitArea + " after timeDown");
			    			createNewPet(hitArea);
			    		}
					}, appearTime2*1000); //time small dog appears; 1-2 seconds
				}, 2000); //animation time
		        break;
		    case 3:
		    	setPetType(hitArea, 2);
		    	//console.log("create Pet: "+ hitArea);
		        $(hitArea + " div.cat-type-m").removeClass("off");
		    	$(hitArea + " div.cat-type-m").addClass("on");
		    	var appearTime3 = Math.ceil(Math.random() * 2)-0.5;
		    	setTimeout(function() {
	    			$(".hit-targets" + hitArea).css("pointer-events","auto"); //make hit area clickable
	    			setTimeout(function() {
	    				console.log("hitvariable: "+ getHitVariable(hitArea) + " " + hitArea);
	    				if(!getHitVariable(hitArea)){
	    					//console.log("time down");
		    				$(".hit-targets" + hitArea).css("pointer-events","off");
		    				$(hitArea + " div.cat-type-m").removeClass("on");
			    			$(hitArea + " div.cat-type-m").addClass("off");
			    			console.log("create Pet at: " + hitArea + " after timeDown");
			    			createNewPet(hitArea);
			    		}
					}, appearTime3*1000);//time cat appears; 0.5-1.5 seconds
				}, 2000); //animation time
		        break;
		    default:
		        break;
			}
		}, timeout*1000);
	}
}

$(".hit-targets.location-dumpster div").click(function(e) {
	//console.log("hit .location-dumpster");
	$(".hit-targets.location-dumpster").css("pointer-events","none"); //prevent multiple actions on one pet at one location
	var offset = $(this).offset();
	$( ".location-dumpster.img.hit-type" ).css({"left":e.pageX-(offset.left/2)+200,"top":e.pageY-(offset.top/2)+100})
	$( ".location-dumpster.img.hit-type" ).removeClass("off");
	$( ".location-dumpster.img.hit-type" ).addClass("on");
	$( ".location-dumpster.img.hit-type" ).animate({
	    left: "-=200",
	    top: "-=100"
	}, 300, function() {
	    $( ".location-dumpster.img.hit-type" ).removeClass("on");
		$( ".location-dumpster.img.hit-type" ).addClass("off");
		hit(".location-dumpster", hitType, hitType2);
		//playSound(".location-dumpster");
	});
});
$(".hit-targets.location-trashcan1").click(function(e) {
	//console.log("hit .location-trashcan1");
	$(".hit-targets.location-trashcan1").css("pointer-events","none"); //prevent multiple actions on one pet at one location
	var offset = $(this).offset();
	$( ".location-trashcan1.img.hit-type" ).css({"left":e.pageX-(offset.left/2)-20,"top":e.pageY-(offset.top/2)+100})
	$( ".location-trashcan1.img.hit-type" ).removeClass("off");
	$( ".location-trashcan1.img.hit-type" ).addClass("on");
	$( ".location-trashcan1.img.hit-type" ).animate({
	    left: "+=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-trashcan1.img.hit-type" ).removeClass("on");
		$( ".location-trashcan1.img.hit-type" ).addClass("off");
		hit(".location-trashcan1", hitType, hitType2);
		//playSound(".location-trashcan1");
	});

	// hit(".location-trashcan1", hitType, hitType2);
	// playSound(".location-trashcan1");
});
$(".hit-targets.location-trashcan2").click(function(e) {
	//console.log("hit .location-trashcan2");
	$(".hit-targets.location-trashcan2").css("pointer-events","none"); //prevent multiple actions on one pet at one location
	var offset = $(this).offset();
	$( ".location-trashcan2.img.hit-type" ).css({"left":e.pageX-(offset.left/2)+20,"top":e.pageY-(offset.top/2)-100})
	$( ".location-trashcan2.img.hit-type" ).removeClass("off");
	$( ".location-trashcan2.img.hit-type" ).addClass("on");
	$( ".location-trashcan2.img.hit-type" ).animate({
	    left: "+=200",
	    top: "+=100"
	  }, 300, function() {
	    $( ".location-trashcan2.img.hit-type" ).removeClass("on");
		$( ".location-trashcan2.img.hit-type" ).addClass("off");
		hit(".location-trashcan2", hitType, hitType2);
		//playSound(".location-trashcan2");
	});

	// hit(".location-trashcan2", hitType, hitType2);
	// playSound(".location-trashcan2");
});
$(".hit-targets.location-bag").click(function(e) {
	//console.log("hit .location-bag");
	$(".hit-targets.location-bag").css("pointer-events","none"); //prevent multiple actions on one pet at one location
	var offset = $(this).offset();
	$( ".location-bag.img.hit-type" ).css({"left":e.pageX-(offset.left/2)-40,"top":e.pageY-(offset.top/2)+150})
	$( ".location-bag.img.hit-type" ).removeClass("off");
	$( ".location-bag.img.hit-type" ).addClass("on");
	$( ".location-bag.img.hit-type" ).animate({
	    left: "+=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-bag.img.hit-type" ).removeClass("on");
		$( ".location-bag.img.hit-type" ).addClass("off");
		hit(".location-bag", hitType, hitType2);
		//playSound(".location-bag");
	});

	// hit(".location-bag", hitType, hitType2, offset);
	// playSound(".location-bag");
});
$(".hit-targets.location-manhole").click(function(e) {
	$(".hit-targets.location-manhole").css("pointer-events","none"); //prevent multiple actions on one pet at one location
	var offset = $(this).offset();
	$( ".location-manhole.img.hit-type" ).css({"left":e.pageX-(offset.left/2)+480,"top":e.pageY-(offset.top/2)+250})
	$( ".location-manhole.img.hit-type" ).removeClass("off");
	$( ".location-manhole.img.hit-type" ).addClass("on");
	$( ".location-manhole.img.hit-type" ).animate({
	    left: "-=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-manhole.img.hit-type" ).removeClass("on");
		$( ".location-manhole.img.hit-type" ).addClass("off");
		hit(".location-manhole", hitType, hitType2);
		//playSound(".location-manhole");
	});

	// hit(".location-manhole", hitType, hitType2);
	// playSound(".location-manhole");
});
$(".hit-targets.location-cardboardBox").click(function(e) {
	$(".hit-targets.location-cardboardBox").css("pointer-events","none"); //prevent multiple actions on one pet at one location
	var offset = $(this).offset();
	$( ".location-cardboardBox.img.hit-type" ).css({"left":e.pageX-(offset.left/2)+100,"top":e.pageY-(offset.top/2)+120})
	$( ".location-cardboardBox.img.hit-type" ).removeClass("off");
	$( ".location-cardboardBox.img.hit-type" ).addClass("on");
	$( ".location-cardboardBox.img.hit-type" ).animate({
	    left: "+=200",
	    top: "-=100"
	  }, 300, function() {
	    $( ".location-cardboardBox.img.hit-type" ).removeClass("on");
		$( ".location-cardboardBox.img.hit-type" ).addClass("off");
		hit(".location-cardboardBox", hitType, hitType2);
		//playSound(".location-cardboardBox");
	});

	// hit(".location-cardboardBox", hitType, hitType2);
	// playSound(".location-cardboardBox");
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