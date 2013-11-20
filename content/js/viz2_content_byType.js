function viz2_content_byType(typeKind) {
	typeKind_gamesPlayed = [];
    typeKind_gamesWon = [];
    typeKind_gamesLost = [];
    typeKind_heroes = [];
	
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
		   bubbles(typeKind_rowNum, typeKind_heroes, typeKind_gamesPlayed, typeKind_gamesWon , typeKind_gamesLost, 0 , 0, 1000, 800);
		   
		   
		   //d3.select('#fragment-2-charts').append('div').attr("id", "content_byType_tables").text("helllllloooooo");
		   
		  for (i = 0; i < typeKind_rowNum; i++){
		  d3.select('#fragment-2-charts')
		  var headLeader = d3.select('#fragment-2-charts').append('table').attr("id", "fragment-2-charts-byType");
		  
		  headLeader.append('tr').attr("style", 	"");
		  headLeader.append('td').text(function(d){return typeKind_heroes[i];}).attr("style", " padding:15px; width:130px; background-color:#bcbab8;");
		  headLeader.append('td').text(function(d){return typeKind_gamesWon[i];}).attr("style", "padding:15px; background-color:#00b441; width:30px;");
		  headLeader.append('td').text(function(d){return typeKind_gamesLost[i];}).attr("style", "padding:15px; background-color:#000000; color:white; width:30px;");
		  headLeader.append('td').text(function(d){return typeKind_gamesPlayed[i];}).attr("style", "padding:15px; width:30px; background-color:#ae3e2d;color:white;");
		  }
		  
		  
	   });
	
	 
	
}