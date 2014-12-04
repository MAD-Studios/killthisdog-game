 var queue = new createjs.LoadQueue();

 //preload.on("progress", handleProgress);
 queue.on("complete", handleComplete);
 //preload.on("fileload", handleFileLoad);

 queue.loadManifest([
     {id: "titlepage-txt-whackem_all", src:"images/screens/titlepage-txt-whackem_all.png"},
     {id: "howToPlay_largeDog-small", src:"images/screens/howToPlay_largeDog-small.png"},
     {id: "howToPlay_smallDog-small", src:"images/screens/howToPlay_smallDog-small.png"},
     {id: "howToPlay_cat-small", src:"images/screens/howToPlay_cat-small.png"},
     {id: "coin-mdk", src:"images/screens/coin-mdk.png"},

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
     {id: "sprite-coin", src:"images/sprite-coin.png"},

     {id: "font", src:"fonts/Veneer-Three.otf"}
 ]);

 function handleComplete() {
    $(".frame.loading-screen").removeClass("active");
	$(".frame.start-screen").addClass("active");
 }