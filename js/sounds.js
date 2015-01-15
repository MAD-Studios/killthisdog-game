function Sound(){

    ion.sound({
        sounds: [
            {
                name: "kill_bigDog",
            },
            {
                name: "kill_smallDog",
            },
            {
                name: "kill_cat",
            },
            {
                name: "save_bigDog",
            },
            {
                name: "save_smallDog",
            },
            {
                name: "save_cat",
            },
            {
                name: "trumpet",
            },
        ],
        volume: 0.5,
        path: "sounds/",
        preload: true
    });

}

Sound.prototype.playSound = function(title, vol){
    ion.sound.play(title, {
        volume: vol
    });
}


Sound.prototype.pauseSound = function(){
    ion.sound.volume =0;
}

