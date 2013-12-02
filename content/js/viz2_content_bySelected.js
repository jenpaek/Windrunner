function viz2_content_bySelected() {
	bySelected_gamesPlayed = [];
    bySelected_gamesWon = [];
    bySelected_gamesLost = [];
    bySelected_heroes = [];
		
	var bySelected_rowNum = 0;
	for (i = 0; i < shown.length;i++){
		 bySelected_gamesPlayed.push(shown[i].numMatches); 
		bySelected_gamesWon.push(shown[i].numWins); 
		bySelected_gamesLost.push(shown[i].numMatches-shown[i].numWins); 
		bySelected_heroes.push(shown[i].hero); 
	}
		   
	if (shown.length < 10) {
		$("#viz2_content_wrapper").addClass("center_horizontal");
		bySelected_length = 1000;
		bySelected_width = 800;
		nodeChargeDistance = -900;
	}
	else if (shown.length < 40) {
		$("#viz2_content_wrapper").addClass("center_horizontal");
		bySelected_length = 1000;
		bySelected_width = 1000;
		nodeChargeDistance = -600;
	}
	else if (shown.length > 40 && shown.length < 60) {
		$("#viz2_content_wrapper").removeClass("center_horizontal");
		bySelected_length = 1300;
		bySelected_width = 1200;
		nodeChargeDistance = -600;
	}
	else {
		$("#viz2_content_wrapper").removeClass("center_horizontal");
		bySelected_length = 1400;
		bySelected_width = 1500;
		nodeChargeDistance = -600;
	}
	bubbles(shown.length, bySelected_heroes, bySelected_gamesPlayed, bySelected_gamesWon , bySelected_gamesLost, 0 , 0, bySelected_length, bySelected_width, nodeChargeDistance);
		   

	
	 
	
}
