function pieChart(hero, size, numWins, numLoses){
	
	var radius = (size/2);
	
    var w = size,                        
    h = size,                            
    r = radius,                            
    color = d3.scale.category20c();    
	
    data = [{"value":numWins}, 
            {"value":numLoses}];
			
    var vis = d3.select("body")
        .append("svg:svg")              
        .data([data])                  
            .attr("width", w)          
            .attr("height", h)
        .append("svg:g")               
            .attr("transform", "translate(" + r + "," + r + ")")    

    var arc = d3.svg.arc()              
        .outerRadius(r);

    var pie = d3.layout.pie()          
        .value(function(d) { return d.value; });   
    var arcs = vis.selectAll("g.slice")     
        .data(pie)                          
        .enter()                           
            .append("svg:g")                
                .attr("class", "slice")
				/*.on("mouseover", function(d) {   JEN YOUR OLD CODE - REVISE LATER
					//people
					 $("#tt_people")
					.html(d.value)
					.show();
					
					//sex
					if(d.value == male)
					{
						$("#tt_sex")
						.html("Male")
						.show();
					}
					else
					{
						$("#tt_sex")
						.html("Female")
						.show();
					}
					
					//year
					 $("#tt_year")
					.html(d.data.year)
					.show();
					
					//age
					 $("#tt_age")
					.html(d.data.age)
					.show();
					
					})
				.on("mouseout", function() {
					//clear people
					$("#tt_people")
					.html("------")
					.show(); 
					//clear sex
					$("#tt_sex")
					.html("------")
					.show();
					//year
					 $("#tt_year")
					.html("------")
					.show();
					//age
					 $("#tt_age")
					.html("------")
					.show();
					
					}); 
					
		
		//built in tooltips		 
		arcs.append("svg:title")
   		.text(function(d) { 
		var sexString = "";
		if(d.value == male)
		{
			sexString = "Male";
		}
		else
		{
			sexString = "Female";
		}
		return "Year: " + d.data.year + "\nAge: " + d.data.age+ "\nSex: " + sexString + "\nPopulation: "+ d.value; 
		}); */

	
        arcs.append("svg:path")
                .attr("fill", function(d, i) { return color(i); } )
                .attr("d", arc);                                    

        arcs.append("svg:text")                                     
                .attr("transform", function(d) {                   
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        
            })
            .attr("text-anchor", "middle")                          
            .text(function(d, i) { return data[i].label; });        
	
}