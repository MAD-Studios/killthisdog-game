 var queue = new createjs.LoadQueue();

 //preload.on("progress", handleProgress);
 queue.on("complete", handleComplete);
 //preload.on("fileload", handleFileLoad);

 queue.loadManifest([
     {id: "titlepage-txt-whackem_all", src:"images/titlepage-txt-whackem_all.png"},
     {id: "background", src:"images/wood_1_@2x.png"},
     {id: "howToPlay_largeDog-small", src:"images/howToPlay_largeDog-small.png"},
     {id: "howToPlay_smallDog-small", src:"images/howToPlay_smallDog-small.png"},
     {id: "howToPlay_cat-small", src:"images/howToPlay_cat-small.png"},
     {id: "commissioner-kill", src:"images/commissioner_kill_intro.png"},
     {id: "commissioner-save", src:"images/commissioner_save_intro.png"},
     {id: "icon-death", src:"images/icon-death.png"},
     {id: "bg", src:"images/bg.jpg"},
     {id: "e-trashCan-1", src:"images/e-trashCan-1.png"},
     {id: "e-trashCan-2", src:"images/e-trashCan-2.png"},
     {id: "e-dumpster", src:"images/e-dumpster.png"},
     {id: "e-trashBag", src:"images/e-trashBag.png"},
     {id: "e-manhole", src:"images/e-manhole.png"},
     {id: "e-cardboardBox", src:"images/e-cardboardBox.png"},
     {id: "sprite-dog-large", src:"images/sprite-dog-large.png"},
     {id: "sprite-dog-small", src:"images/sprite-dog-small.png"},
     {id: "sprite-cat-small", src:"images/sprite-cat-small.png"},
     {id: "scissor", src:"images/cursor_scissor.png"},
     {id: "shovel", src:"images/cursor_shovel.png"},
     {id: "coin-animation", src:"images/commissionerCoins_animation.png"},
     {id: "coin-bs", src:"images/coin-bs.png"},
     {id: "coin-clm", src:"images/coin-clm.png"},
     {id: "coin-dh", src:"images/coin-dh.png"},
     {id: "coin-lw", src:"images/coin-lw.png"},
     {id: "coin-sr", src:"images/coin-sr.png"},
     {id: "coin-tr", src:"images/coin-tr.png"},
     {id: "coin-mdk", src:"images/coin-dk.png"}
 ]);

 function handleComplete() {
     $(".frame.loading-screen").removeClass("active");
     $(".frame.start-screen").addClass("active");
 }