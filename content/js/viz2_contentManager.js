  function viz2_contentManager() {
	  viz2_state = "filterby_popularity";
	  
	  
	  $('#ui-id-2').click(function(e) { 
	  	if (default_view == true) {
		    viz2_restablish_listview();
			generateContent_viz2_byPopularity();
		    popularity_exists = true;
			default_view = false;
			$("#dropdownText").text("Popularity");
			$("#viz2_header").html("Win | Lose Rate ordered by the most played heroes for The International 3 Tournament.<br>Ordered by clusters of 5 from most played to least played.");
			$("#viz2_header_images").html("<img src='content/images/viz2_popularityKey.png' /><img src='content/images/viz2_hoverInstructions.png' style='margin-left:30px;'/><img src='content/images/viz2_selectKey.png' style='margin-left:30px;'/>");
			
		}
		/*if (filterbystats_view == true) {
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_bySelected();
		}*/
		
		if (current_state != movement) {
			popularity_exists = false;
			default_view == false;
			$('#'+viz2_state).click();
			current_state = movement;	
		}
		
		if ((current_table_movement != table_movement) && (viz2_state == "filterby_heroStatistics")) {
			$('#'+viz2_state).click();
			current_table_movement = table_movement;
			
		}
		  
	  });
	  
	  $('#filterby_heroStatistics').click(function(e) { 
	  		$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_bySelected();
			filterbystats_view = true;
			d3.select('#fragment-2').attr('style', 'height: 1800px');
			$("#dropdownText").text("Selected Hero Statistics");
			$("#viz2_header").text("Win | Lose Rate shown and selected in the Hero Statistics table");
			$("#viz2_header_images").html("<img src='content/images/viz2_key.png' /><img src='content/images/viz2_hoverInstructions.png' style='margin-left:30px;'/>");
			viz2_state = "filterby_heroStatistics";
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
			$("#viz2_header").html("Win | Lose Rate ordered by the most played heroes for The International 3 Tournament.<br>Ordered by clusters of 5 from most played to least played.");
			$("#viz2_header_images").html("<img src='content/images/viz2_popularityKey.png' /><img src='content/images/viz2_hoverInstructions.png' style='margin-left:30px;'/><img src='content/images/viz2_selectKey.png' style='margin-left:30px;'/>");
			viz2_state = "filterby_popularity";
			
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
			$("#viz2_header").text("Win | Lose Rate shown and selected in the Hero Statistics table by Hero Type");
			$("#viz2_header_images").html("<img src='content/images/viz2_key.png' /><img src='content/images/viz2_hoverInstructions.png' style='margin-left:30px;'/>");
			viz2_state = "filterby_type_carry";
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
			$("#viz2_header").text("Win | Lose Rate shown and selected in the Hero Statistics table by Hero Type");
			$("#viz2_header_images").html("<img src='content/images/viz2_key.png' /><img src='content/images/viz2_hoverInstructions.png' style='margin-left:30px;'/>");
			viz2_state = "filterby_type_mid";
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
			$("#viz2_header").text("Win | Lose Rate shown and selected in the Hero Statistics table by Hero Type");
			$("#viz2_header_images").html("<img src='content/images/viz2_key.png' /><img src='content/images/viz2_hoverInstructions.png' style='margin-left:30px;'/>");
			viz2_state = "filterby_type_offlane";
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
			$("#viz2_header").text("Win | Lose Rate shown and selected in the Hero Statistics table by Hero Type");
			$("#viz2_header_images").html("<img src='content/images/viz2_key.png' /><img src='content/images/viz2_hoverInstructions.png' style='margin-left:30px;'/>");
			viz2_state = "filterby_type_jungler";
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
			$("#viz2_header").text("Win | Lose Rate shown and selected in the Hero Statistics table by Hero Type");
			$("#viz2_header_images").html("<img src='content/images/viz2_key.png' /><img src='content/images/viz2_hoverInstructions.png' style='margin-left:30px;'/>");
			viz2_state = "filterby_type_support";
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