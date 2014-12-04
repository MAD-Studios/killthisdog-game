function Counter(mode){
	var counter = new Date(); 
	
	$('#gameCountdown').css("display", "block");

	if(mode=='timer'){
		counter.setMinutes(counter.getMinutes() + 1);
		counter.setSeconds(counter.getSeconds() + 30);
		$('#gameTimer').countdown({compact:true, until: counter, format: 'MS', onExpiry: timeOff}); 
	}else{
		counter.setSeconds(counter.getSeconds() + 3);
		$('#gameCountdown').countdown({compact:true, until: counter, format: 'S', expiryText: '', onExpiry: countdownOff});
	}
}

function timeOff() { 
	endGame();
	setTimeout(function() {
		$(".frame.play-active").removeClass("active");
		if(mode == 'kill'){
						$(".frame.kill-score").addClass("active");
					}else{
						$(".frame.save-score").addClass("active");
					}
		$('#gameCountdown').countdown('destroy');
		$('#gameTimer').countdown('destroy');
	}, 2000);
	
	//$(".frame.kill-score").addClass("active");
	
}

function countdownOff() { 
	$('#gameCountdown').html('GO');
	setTimeout(function() {
		$('#gameCountdown').css("display", "none");
	}, 1000);

	var timer = new Counter('timer');
}