function viz2_content_byType(typeKind) {
	typeKind_gamesPlayed = [];
    typeKind_gamesWon = [];
    typeKind_gamesLost = [];
    typeKind_heroes = [];
	
	if (typeKind < 3) {
		nodeChargeDistance = -500;
	}
	else if (typeKind == 3 || typeKind == 4) {
		nodeChargeDistance = -800;
	}
	else {
		nodeChargeDistance = -500;
	}
	
	var typeKind_rowNum = 0;
	   d3.csv('content/data/heroAvgs.csv', function(data) {
		  data.forEach(function(d) {	
		  	  if (d.group == typeKind){
				  typeKind_rowNum++;	
				  typeKind_gamesPlayed.push(+d.numMatches);
				  typeKind_gamesWon.push(+d.numWins);
				  typeKind_gamesLost.push((+d.numMatches)-(+d.numWins));
				  typeKind_heroes.push(d.hero);
			  }
			  
		  })
		   bubbles(typeKind_rowNum, typeKind_heroes, typeKind_gamesPlayed, typeKind_gamesWon , typeKind_gamesLost, 0 , 0, 1000, 800, nodeChargeDistance);
		   
		   
		   //d3.select('#fragment-2-charts').append('div').attr("id", "content_byType_tables").text("helllllloooooo");
		   
		  
		  
	   });
	
	 
	
}