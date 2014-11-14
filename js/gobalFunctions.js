// Enable the passage of the 'this' object through the JavaScript timers
 
var __nativeST__ = window.setTimeout;
 
window.setTimeout = function (vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */) {
  var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
  return __nativeST__(vCallback instanceof Function ? function () {
    vCallback.apply(oThis, aArgs);
  } : vCallback, nDelay);
};

function setHighscore(){
	var newScore = parseInt(document.getElementById('pointCount').innerHTML)+parseInt($(hitArea + " .on")[0].getAttribute("data-scoreVal")); //set new score
	if(newScore >= 20000){
		document.getElementById('pointCount').innerHTML = 20000;
		//endGame()
	}else{
		document.getElementById('pointCount').innerHTML = newScore;
		if(mode == 'kill'){
			document.getElementById('scoreEndKill').innerHTML = newScore;
		}else{
			document.getElementById('scoreEndSave').innerHTML = newScore;
		}
		
	}
}