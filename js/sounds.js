function Sound(){

    ion.sound({
        sounds: [
            {
                name: "metal_plate",
                volume: 0.5
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

