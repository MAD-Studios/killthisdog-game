function Sound(){

    ion.sound({
        sounds: [
            {
                name: "blood1",
                volume: 0.5
            },
            {
                name: "blood2",
                volume: 0.5
            },
            {
                name: "blood3",
                volume: 0.5
            },
            {
                name: "blood4",
                volume: 0.5
            },
            {
                name: "blood5",
                volume: 0.5
            },
            {
                name: "blood6",
                volume: 0.5
            },
            {
                name: "blood7",
                volume: 0.5
            },
            {
                name: "blood8",
                volume: 0.5
            },
            {
                name: "cat1",
                volume: 0.5
            },
            {
                name: "cat2",
                volume: 0.5
            },
            {
                name: "cat3",
                volume: 0.5
            },
            {
                name: "cat4",
                volume: 0.5
            },
            {
                name: "cat5",
                volume: 0.5
            },
            {
                name: "cat6",
                volume: 0.5
            },
            {
                name: "cat7",
                volume: 0.5
            },
            {
                name: "cat8",
                volume: 0.5
            },
            {
                name: "cat9",
                volume: 0.5
            },
            {
                name: "cat10",
                volume: 0.5
            },
            {
                name: "cat11",
                volume: 0.5
            },
            {
                name: "cat12",
                volume: 0.5
            },
            {
                name: "cat13",
                volume: 0.5
            },
            {
                name: "cat14",
                volume: 0.5
            },
            {
                name: "cat15",
                volume: 0.5
            },
            {
                name: "cat16",
                volume: 0.5
            },
            {
                name: "cat17",
                volume: 0.5
            },
            {
                name: "cat18",
                volume: 0.5
            },
            {
                name: "cat19",
                volume: 0.5
            },
            {
                name: "cat20",
                volume: 0.5
            },
            {
                name: "cat21",
                volume: 0.5
            },
            {
                name: "chop",
                volume: 0.5
            },
            {
                name: "coin1",
                volume: 0.5
            },
            {
                name: "coin2",
                volume: 0.5
            },
            {
                name: "coin3",
                volume: 0.5
            },
            {
                name: "metal_plate",
                volume: 0.5
            },
            {
                name: "metal1",
                volume: 0.5
            },
            {
                name: "metal2",
                volume: 0.5
            },
            {
                name: "organ",
                volume: 0.5
            },
            {
                name: "trumpet",
                volume: 0.5
            },
            {
                name: "voice_hurt",
                volume: 0.5
            },
        ],
        volume: 0.5,
        path: "sounds/",
        preload: true
    });

}

Sound.prototype.playSound = function(title){
    ion.sound.play(title);
}

