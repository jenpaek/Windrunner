  function viz2_contentManager() {
	  
	  if (default_view == true) {
		    viz2_restablish_listview();
			generateContent_viz2_byPopularity();
		    popularity_exists = true;
			default_view = false;
		  
	  }
	  
	  $('#filterby_popularity').click(function(e) { 
	  		if (popularity_exists == false && default_view == false) {
	  			viz2_restablish_listview();
				generateContent_viz2_byPopularity();
				popularity_exists = true;
			}
			
		});
		
	$('#filterby_type_carry').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			
			
		});
	$('#filterby_type_mid').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			
			
		});
	$('#filterby_type_offlane').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			
			
		});
	$('#filterby_type_jungler').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			
			
		});
	$('#filterby_type_support').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			
			
		});
		
  }
  
  function viz2_restablish_listview() {
	  	
		var viz2content_outerLayer = d3.select('#viz2_content_wrapper').append('div').attr('id', 'viz2_content');
		viz2content_outerLayer.append('div').attr('id', 'fragment-2-charts').attr('style', 'width:500px; float: left;');
		viz2content_outerLayer.append('div').attr('id', 'fragment-2-left-info').attr('style', 'float: left; margin-left:20px;');
		
  }