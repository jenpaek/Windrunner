function bubbles(rowNum, viz2_heroes, viz2_gamesPlayed, viz2_gamesWon , viz2_gamesLost, namingNum, clusterNum, ww, hh) {
	var num = 0;
	var idNum = namingNum;
	
	var winColor = '#00b441';
	var loseColor = '#000000';
	//console.log(graph); 
			  
	var graph = {
    	nodes: [], links: [], radius: []
	};


	for (i = 0 ; i< rowNum; i++){
		
	  graph.nodes.push({ 
			"proportions": [{"group": 1, "value": viz2_gamesWon[i]},
							 {"group": 2, "value": viz2_gamesLost[i]}]
			
		});	
		
		 graph.radius.push({ 
			"radius" : viz2_gamesPlayed[i]
			
		});		  
		
	}
	//console.log(viz2_gamesPlayed);
	//console.log(viz2_gamesPlayed[0]);
	var lengthofLink = viz2_gamesPlayed[0] * 3;
	//console.log(lengthofLink);
	//graph.links.push({ "source": 0, "target": 1, "length": 500, "width": 1 });
	//console.log(graph.radius);   
	   
	//console.log(viz2_gamesWon);
	//console.log(viz2_gamesLost);
   
    var width = ww,
    height = hh,
    color = d3.scale.linear().domain([1,2]).range([winColor, loseColor]);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.value; });

    /*var arc = d3.svg.arc()
        .outerRadius(viz2_gamesPlayed[num++])
        .innerRadius(0);
		*/

    var svg = d3.select("#fragment-2-charts").append("svg")
        .attr("width", width)
        .attr("height", height)
		.attr("id", "all"+clusterNum)
		.attr("style", "stroke: white; background-color:white;");

    var force = d3.layout.force()
        .charge(-500)
        .linkDistance(lengthofLink)
        .size([width, height]);

    force.nodes(graph.nodes)
         .links(graph.links)
         .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link");

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("g")
        .attr("class", "node");
		
	//d3.select("body").select("svg").attr("id", "all");
	//d3.select(".link").parentNode.attr("id", "all");
	var childrenNodes = d3.select("#all"+clusterNum).selectAll("g")
		.attr("id", function (d){   
           return "node_"+idNum++;            
        });
	var arc = d3.svg.arc()
        .outerRadius(34)
        .innerRadius(0);
		
    node.selectAll("path")
        .data(function(d, i) {return pie(d.proportions); })
        .enter()
        .append("svg:path")
        .attr("d", d3.svg.arc()
        .outerRadius(6)
        .innerRadius(0))
        .attr("fill", function(d, i) { return color(d.data.group); })
		.append("svg:title")
   		.text(function(d) { 
		
		var nameString = this.parentNode.parentNode.id;
		var replacementString = nameString.replace("node_","");
		replacementString = replacementString - namingNum;
		var winOrLoseRate = d3.select(this.parentNode).attr("fill");
		if (winOrLoseRate == winColor )
		{
			rateString = "Win Rate: "+viz2_gamesWon[replacementString]+" games";
		}
		else if (winOrLoseRate == loseColor)
		{
			rateString = "Lose Rate: " +viz2_gamesLost[replacementString]+ " games";
		}

		return viz2_heroes[replacementString] + "\nTotal Games Played: " + viz2_gamesPlayed[replacementString] + "\n" + rateString;
		});


	for (i=0;i<viz2_gamesPlayed.length;i++){
		//console.log("#node_"+i)
		var newNamingNum = namingNum+i;
		d3.select("#node_"+newNamingNum).selectAll("path")
		.attr("d", d3.svg.arc()
        .outerRadius(viz2_gamesPlayed[i])
        .innerRadius(0));
	}
		
    force.on("tick", function() {
        link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

        node.attr("x", function(d) { return d.x; })
            .attr("y", function(d) { return d.y; })
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"});
    });

}