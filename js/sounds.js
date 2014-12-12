function Sound(){

    ion.sound({
        sounds: [
            {
                name: "blood1",
            },
            {
                name: "blood2",
            },
            {
                name: "blood3",
            },
            {
                name: "blood4",
            },
            {
                name: "blood5",
            },
            {
                name: "blood6",
            },
            {
                name: "blood7",
            },
            {
                name: "blood8",
            },
            {
                name: "cat1",
            },
            {
                name: "cat2",
            },
            {
                name: "cat3",
            },
            {
                name: "cat4",
            },
            {
                name: "cat5",
            },
            {
                name: "cat6",
            },
            {
                name: "cat7",
            },
            {
                name: "cat8",
            },
            {
                name: "cat9",
            },
            {
                name: "cat10",
            },
            {
                name: "cat11",
            },
            {
                name: "cat12",
            },
            {
                name: "cat13",
            },
            {
                name: "cat14",
            },
            {
                name: "cat15",
            },
            {
                name: "cat16",
            },
            {
                name: "cat17",
            },
            {
                name: "cat18",
            },
            {
                name: "cat19",
            },
            {
                name: "cat20",
            },
            {
                name: "cat21",
            },
            {
                name: "dog_big",
            },
            {
                name: "dog_small",
            },
            {
                name: "chop-multiple",
            },
            {
                name: "chop",
            },
            {
                name: "coin1",
            },
            {
                name: "coin2",
            },
            {
                name: "coin3",
            },
            {
                name: "metal_plate",
            },
            {
                name: "metal1",
            },
            {
                name: "metal2",
            },
            {
                name: "organ",
            },
            {
                name: "trumpet",
            },
            {
                name: "voice_hurt",
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

