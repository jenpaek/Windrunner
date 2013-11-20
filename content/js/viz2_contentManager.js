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
			viz2_byTypeWrapper();
			viz2_content_byType(1);
			
			
		});
	$('#filterby_type_mid').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_byType(2);
			
		});
	$('#filterby_type_offlane').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_byType(3);
			
		});
	$('#filterby_type_jungler').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_byType(4);
			
		});
	$('#filterby_type_support').click(function(e) { 
			$('#viz2_content').remove();
			popularity_exists = false;
			viz2_byTypeWrapper();
			viz2_content_byType(5);
		});
		
  }
  
  function viz2_restablish_listview() {
	  
	  	d3.select('#viz2_content').remove();
		var viz2content_outerLayer = d3.select('#viz2_content_wrapper').append('div').attr('id', 'viz2_content');
		viz2content_outerLayer.append('div').attr('id', 'fragment-2-charts').attr('style', 'width:500px; float: left;');
		viz2content_outerLayer.append('div').attr('id', 'fragment-2-left-info').attr('style', 'float: left; margin-left:20px;');
		
  }
  
  function viz2_byTypeWrapper() {
	  	
		d3.select('#viz2_content').remove();
		var viz2content_outerLayer_byTypeWrapper = d3.select('#viz2_content_wrapper').append('div').attr('id', 'viz2_content');
		viz2content_outerLayer_byTypeWrapper.append('div').attr('id', 'fragment-2-charts').attr('style', 'width:500px; float: left;');
		
  }