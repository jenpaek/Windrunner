  function generateContent_viz2_byPopularity() {
  viz2_gamesPlayed = [];
  viz2_gamesWon = [];
  viz2_gamesLost = [];
  viz2_heroes = [];
  total = [];
  won = [];
  lost = [];
  hero = [];
  ordered_total = [];
  ordered_won = [];
  ordered_lost = [];
  ordered_hero = [];
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
		  
		 var indexLocation = 0;
		   for (e = 0; e < rowNum; e++){
		  	largest = Math.max.apply(Math, viz2_gamesPlayed);
			for (r = 0; r < rowNum; r++){
				if (viz2_gamesPlayed[r] == largest){
					indexLocation = r;	
					//console.log("largest is: " +largest +" at " + r);
				}
			}
			//console.log(viz2_gamesPlayed[indexLocation]);
			  ordered_total.push(viz2_gamesPlayed[indexLocation]);
			  ordered_won.push(viz2_gamesWon[indexLocation]);
			  ordered_lost.push(viz2_gamesLost[indexLocation]);
			  ordered_hero.push(viz2_heroes[indexLocation]);
			  viz2_gamesPlayed[indexLocation]= null;
			  
		  }
		  //console.log("ordered total: "+ordered_total);
		  //console.log("ordered list size: "+ordered_total.length);
		  
		 //bubbles(rowNum, viz2_heroes, viz2_gamesPlayed, viz2_gamesWon , viz2_gamesLost );
		 //87 monsters
		 var incrementclusercounter = 1;
		 for (jen = 0; jen < rowNum; jen=jen+5){
			 for (i = jen; i < jen+5; i ++){
				 total.push(ordered_total[i]);
				 won.push(ordered_won[i]);
				 lost.push(ordered_lost[i]);
				 hero.push(ordered_hero[i]);
			 }
			 if (incrementclusercounter > 17){
			 	bubbles(2, hero, total, won , lost, jen , incrementclusercounter);
			 }
			 else {
			 	bubbles(5, hero, total, won , lost, jen , incrementclusercounter);
			 }
			 //console.log(total);
			 total = [];
			  won = [];
			  lost = [];
			  hero = [];
			  incrementclusercounter++;
		 }
		  
		 /*for (i = 5; i < 10; i ++){
			 total.push(viz2_gamesPlayed[i]);
			 won.push(viz2_gamesWon[i]);
			 lost.push(viz2_gamesLost[i]);
			 hero.push(viz2_heroes[i]);
		 }
		 bubbles(5, hero, total, won , lost, 5 , 2 );
		 //console.log(total);
		 total = [];
		  won = [];
		  lost = [];
		  hero = [];*/
		  
		  for (i = 0; i < ordered_hero.length; i++){
		  var headLeader = d3.select('#fragment-2-left-info').append('table').attr("id", "fragment-2-left-info-table"+i)
		  		  if (i%5==0 && i != 0){
					headLeader.attr("style", 	"padding-top:230px");	
				}
		  headLeader.append('tr').attr("style", 	"");
		  headLeader.append('td').text(function(d){return ordered_hero[i];}).attr("style", " padding:15px; width:130px; background-color:#bcbab8;");
		  headLeader.append('td').text(function(d){return ordered_won[i];}).attr("style", "padding:15px; background-color:#00b441; width:30px;");
		  headLeader.append('td').text(function(d){return ordered_lost[i];}).attr("style", "padding:15px; background-color:#000000; color:white; width:30px;");
		  headLeader.append('td').text(function(d){return ordered_total[i];}).attr("style", "padding:15px; width:30px; background-color:#ae3e2d;color:white;");
		  }
		 
	   });
	   
		 
	   
  }