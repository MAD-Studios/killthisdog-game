function Sound(){

    ion.sound({
        sounds: [
            {
                name: "beer_can_opening",
                volume: 0.2
            },
            {
                name: "dog",
                volume: 0.2
            }
        ],
        volume: 0.5,
        path: "sounds/",
        preload: true
    });

}

Sound.prototype.playSound = function(title){
    ion.sound.play(title);
}

