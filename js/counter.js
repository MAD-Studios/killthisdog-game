function Counter(mode){
	var counter = new Date(); 
	var counter_help = new Date();

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
    $(".frame.play-active").removeClass("active");
	$(".frame.kill-score").addClass("active");
}

function countdownOff() { 
	$('#gameCountdown').html('GO');
	setTimeout(function() {
    	$('#gameCountdown').remove();
	}, 1000);

	var timer = new Counter('timer');
}