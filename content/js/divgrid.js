d3.divgrid = function(config) {
  var columns = [];
  var roles = ["Carry","Mid","Offlane","Farming Support","Hard Support"];

  var dg = function(selection) {
    if (columns.length == 0) columns = d3.keys(selection.data()[0][0]);
    console.log(selection.data()[0][0]);

    // header
    selection.selectAll(".header")
        .data([true])
      .enter().insert("div","#accordion")
        .attr("class", "header")

    var header = selection.select(".header")
      .selectAll(".cell")
      .data(columns);

    header.enter().append("div")
      .attr("class", function(d,i) { return "col-" + i; })
      .classed("cell", true)

    selection.selectAll(".header .cell")
      .text(function(d) { return d; });

    header.exit().remove();
    for(var j = 1; j < 6; j++){
      var rows = selection.select(".group" + j).selectAll(".row")
        .data(function(d) { 
          var dat = [];
          for(var i = 0; i < d.length;i++){
            if(d[i].group==j){
              dat.push(d[i]);
            }
          }
          return dat; })
        rows.enter().append("div")
        .attr("class", "row")

    rows.exit().remove();
    }

    var cells = selection.selectAll(".row").selectAll(".cell")
        .data(function(d) { return columns.map(function(col){return d[col];}) })

    // cells
    cells.enter().append("div")
      .attr("class", function(d,i) { return "col-" + i; })
      .classed("cell", true)

    cells.exit().remove();

    selection.selectAll(".cell")
      .text(function(d) { return d; }).style({'color':'black','width':'68px'});
    selection.selectAll(".row").selectAll(".col-0")
      .text(function(d) { return d; }).style({'color':'black','width':'76px'});  
    selection.selectAll(".header").selectAll(".col-0")
      .text(function(d) { return d; }).style({'color':'black','width':'108px'}); 

    return dg;
  };

  dg.columns = function(_) {
    if (!arguments.length) return columns;
    columns = _;
    return this;
  };

  return dg;
};