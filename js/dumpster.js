function Dumpster(){
	this.hit = false;
	this.timeoutCreatePet = Math.ceil(Math.random() * 5);
	this.choosePet = Math.ceil(Math.random() * 3);
	this.pet;
	this.finished = false;
}

Dumpster.prototype.createPet = function(){

	this.pet = new Pet();
	this.pet.hitArea = ".location-dumpster";
	this.pet.createNewPet();

}

Dumpster.prototype.destroyPet = function(){

	var self = this;

	setTimeout(function() {
		console.log(self.pet);
		if(self.pet.hit){
			setTimeout(function() {
				$(hitArea + " div.dog-type-s").removeClass("on");
		    	$(hitArea + " div.dog-type-s").addClass("off"); 
				self.pet = null;
				self.pet.createNewPet();
			}, 1000);
		}else{
			setTimeout(function() {
    			$(".location-dumpster" + self.pet.petType).removeClass("on");
		    	$(".location-dumpster" + self.pet.petType).addClass("off");
				self.pet = null;
				self.createPet();
			}, self.pet.appearTime*1000);
		}
	}, (self.pet.timeoutCreatePet + 2)*1000);
}