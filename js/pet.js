function Pet(){
	this.hitArea;
	this.hitType;
	this.hitStatus;
	this.petType;
	this.hit = false;
	this.timeoutCreatePet = Math.ceil(Math.random() * 5);
	this.choosePet = Math.ceil(Math.random() * 3);
	this.appearTime;
	this.appearTimeDown = false;
}

Pet.prototype.createNewPet = function(){

	var self = this;

	var hitArea = this.hitArea;
	//type of pet (1=large dog, 2=small dog, 3=cat)
	var choosePet = this.choosePet;

	setTimeout(function() {
		switch(1) {
	    case 1:
	    	//console.log($(hitArea + " div.dog-type-l"));
	    	self.petType = " div.dog-type-l";
	        $(self.hitArea + " div.dog-type-l").removeClass("off");
	    	$(self.hitArea + " div.dog-type-l").addClass("on");
	    	self.appearTime = Math.ceil(Math.random() * 3);
	    	console.log("Appear Time setting: " + self.appearTime);
	    	setTimeout(function() {
    			$(".hit-targets" + self.hitArea).css("pointer-events","auto"); //make hit area clickable
    			setTimeout(function() {
    				this.appearTimeDown = true;
				}, self.appearTime*1000); //time large dog appears; 1-3 seconds
			}, 2000); //animation time
	        break;
	    case 2:
	    	self.petType = " div.dog-type-s";
	    	//console.log($(hitArea + " div.dog-type-s"));
	        $(self.hitArea + " div.dog-type-s").removeClass("off");
	    	$(self.hitArea + " div.dog-type-s").addClass("on");
	    	appearTime = Math.ceil(Math.random() * 2);
	    	setTimeout(function() {
    			$(".hit-targets" + self.hitArea).css("pointer-events","auto"); //make hit area clickable
    			setTimeout(function() {
    				this.appearTimeDown = true;
				}, self.appearTime*1000); //time small dog appears; 1-3 seconds
			}, 2000); //animation time
	        break;
	    case 3:
	    	self.petType = " div.cat-type-m";
	    	//console.log($(hitArea + " div.cat-type-m"));
	        $(self.hitArea + " div.cat-type-m").removeClass("off");
	    	$(self.hitArea + " div.cat-type-m").addClass("on");
	    	appearTime = Math.ceil(Math.random() * 2)-0.5;
	    	setTimeout(function() {
    			$(".hit-targets" + self.hitArea).css("pointer-events","auto"); //make hit area clickable
    			setTimeout(function() {
    				this.appearTimeDown = true;
				}, self.appearTime*1000); //time cat appears; 1-3 seconds
			}, 2000); //animation time
	        break;
	    default:
	        break;
		}
	}, self.timeoutCreatePet*1000);
};

Pet.prototype.hitPet = function(){

	var hitArea = this.hitArea;
	var hitType = this.hitType;
	var hitStatus = this.hitStatus;
	
	if($(hitArea + " div").hasClass("on")){

		this.hit = true;

		$(".hit-targets" + hitArea).css("pointer-events","none"); //prevent multiple actions on one pet
		$(".hit-targets" + hitArea).addClass(hitType); //depends on type of game: hit or save
		setTimeout(function() {
    		$(".hit-targets" + hitArea).removeClass(hitType);
    		$(".hit-targets" + hitArea).addClass(hitStatus); // depends on type of game: kill or saved
    		
		}, 1000);
	}
}

Pet.prototype.deletePet = function(){

	var hitArea = this.hitArea;

	$(".hit-targets" + hitArea).css("pointer-events","off");
    $(hitArea + " div.dog-type-l").removeClass("on");
	$(hitArea + " div.dog-type-l").addClass("off");

}