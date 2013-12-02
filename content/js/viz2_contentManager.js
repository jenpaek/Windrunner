  function viz2_contentManager() {
	  highlighted_nodes = [];
	  highlighted_nodes_position = {};
	  
	  $('#ui-id-2').click(function(e) { 
	  	if (default_view == true) {
		    viz2_restablish_listview();
			generateContent_viz2_byPopularity();
		    popularity_exists = true;
			default_view = false;
			$("#dropdownText").text("Popularity");
		}
		if (filterbystats_view == true) {
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_bySelected();
		}
		  
	  });
	  
	  $('#filterby_heroStatistics').click(function(e) { 
	  		$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_bySelected();
			filterbystats_view = true;
			d3.select('#fragment-2').attr('style', 'height: 1800px');
			$("#dropdownText").text("Selected Heor Statistics");
			
		});
	  
	  $('#filterby_popularity').click(function(e) { 
	  		if (popularity_exists == false && default_view == false) {
	  			viz2_restablish_listview();
				generateContent_viz2_byPopularity();
				popularity_exists = true;
			}
			filterbystats_view = false;
			$("#viz2_content_wrapper").addClass("center_horizontal");
			$("#dropdownText").text("Popularity");
			
			
		});
		
	$('#filterby_type_carry').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_byType(1);
			d3.select('#fragment-2').attr('style', 'height: 1100px');
			filterbystats_view = false;
			$("#viz2_content_wrapper").addClass("center_horizontal");
			$("#dropdownText").text("Type - Carry");
			
		});
	$('#filterby_type_mid').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_byType(2);
			d3.select('#fragment-2').attr('style', 'height: 1100px');
			filterbystats_view = false;
			$("#viz2_content_wrapper").addClass("center_horizontal");
			$("#dropdownText").text("Type - Mid");
		});
	$('#filterby_type_offlane').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_byType(3);
			d3.select('#fragment-2').attr('style', 'height: 1100px');
			filterbystats_view = false;
			$("#viz2_content_wrapper").addClass("center_horizontal");
			$("#dropdownText").text("Type - Offlane");
		});
	$('#filterby_type_jungler').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_byType(4);
			d3.select('#fragment-2').attr('style', 'height: 1100px');
			filterbystats_view = false;
			$("#viz2_content_wrapper").addClass("center_horizontal");
			$("#dropdownText").text("Type - Farming Support");
		});
	$('#filterby_type_support').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_byType(5);
			d3.select('#fragment-2').attr('style', 'height: 1100px');
			filterbystats_view = false;
			$("#viz2_content_wrapper").addClass("center_horizontal");
			$("#dropdownText").text("Type - Hard Support");
		});
		
  }
  
  function viz2_restablish_listview() {
	  
	  	d3.select('#viz2_content').remove();
		var viz2content_outerLayer = d3.select('#viz2_content_wrapper').append('div').attr('id', 'viz2_content');
		viz2content_outerLayer.append('div').attr('id', 'fragment-2-charts').attr('style', 'width:500px; float: left;');
		viz2content_outerLayer.append('div').attr('id', 'fragment-2-left-info').attr('style', 'float: left; margin-left:20px;');
		
		d3.select('#fragment-2').attr('style', 'height: 9290px');
		
  }
  
  function viz2_byTypeWrapper() {
	  	
		d3.select('#viz2_content').remove();
		var viz2content_outerLayer_byTypeWrapper = d3.select('#viz2_content_wrapper').append('div').attr('id', 'viz2_content');
		viz2content_outerLayer_byTypeWrapper.append('div').attr('id', 'fragment-2-charts').attr('style', 'width:500px; float: left;');
		
		//d3.select('#fragment-2').attr('style', 'height: 1040px');
		
  }