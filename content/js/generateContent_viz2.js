  function generateContent_viz2() {
  viz2_gamesPlayed = [];
  viz2_gamesWon = [];
  viz2_gamesLost = [];
  viz2_heroes = [];
		   var rowNum = 0;
	   d3.csv('content/data/heroAvgs.csv', function(data) {
		  data.forEach(function(d) {	
			  rowNum++;	
			  viz2_gamesPlayed.push(+d.numMatches);
			  viz2_gamesWon.push(+d.numWins);
			  viz2_gamesLost.push((+d.numMatches)-(+d.numWins));
			  viz2_heroes.push(d.hero);
			  
		  })
		  //console.log("final: "+viz2_gamesPlayed);
		  //pieChart(0,100,9,6);
		  bubbles(rowNum, viz2_heroes, viz2_gamesPlayed, viz2_gamesWon , viz2_gamesLost );
	   });
	   
  }