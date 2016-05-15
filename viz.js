socialMedia = {
    "facebook" : true,
    "twitter" : false,
    "instagram" : false,
    "line" : false,
};

batch = {
    "2012" : true,
    "2013" : false,
    "2014" : false
}
//console.log($(".social-media-button"));

var w = 900;
var h = 345;

var margin = {
    top: 10,
    bottom: 30,
    left: 40,
    right: 40,
};

var width = w - margin.right - margin.left;
var height = h - margin.top - margin.bottom;

/*var dataFacebook = [
    {value: 10, time:"00:00", batch: "2012"},
    {value: 20, time:"01:00", batch: "2012"},
    {value: 30, time:"02:00", batch: "2012"},
    {value: 40, time:"03:00", batch: "2012"},
    {value: 50, time:"04:00", batch: "2012"},
    {value: 40, time:"05:00", batch: "2012"},
    {value: 45, time:"06:00", batch: "2012"},
    {value: 60, time:"07:00", batch: "2012"},
    {value: 70, time:"08:00", batch: "2012"},
    {value: 20, time:"09:00", batch: "2012"},
    {value: 40, time:"10:00", batch: "2012"},
    {value: 40, time:"11:00", batch: "2012"},
    {value: 10, time:"12:00", batch: "2012"},
    {value: 20, time:"13:00", batch: "2012"},
    {value: 80, time:"14:00", batch: "2012"},
    {value: 40, time:"15:00", batch: "2012"},
    {value: 50, time:"16:00", batch: "2012"},
    {value: 90, time:"17:00", batch: "2012"},
    {value: 95, time:"18:00", batch: "2012"},
    {value: 60, time:"19:00", batch: "2012"},
    {value: 70, time:"20:00", batch: "2012"},
    {value: 80, time:"21:00", batch: "2012"},
    {value: 40, time:"22:00", batch: "2012"},
    {value: 20, time:"23:00", batch: "2012"},
    {value: 40, time:"00:00", batch: "2013"},
    {value: 50, time:"01:00", batch: "2013"},
    {value: 20, time:"02:00", batch: "2013"},
    {value: 45, time:"03:00", batch: "2013"},
    {value: 32, time:"04:00", batch: "2013"},
    {value: 50, time:"05:00", batch: "2013"},
    {value: 60, time:"06:00", batch: "2013"},
    {value: 60, time:"07:00", batch: "2013"},
    {value: 77, time:"08:00", batch: "2013"},
    {value: 24, time:"09:00", batch: "2013"},
    {value: 45, time:"10:00", batch: "2013"},
    {value: 47, time:"11:00", batch: "2013"},
    {value: 13, time:"12:00", batch: "2013"},
    {value: 26, time:"13:00", batch: "2013"},
    {value: 30, time:"14:00", batch: "2013"},
    {value: 48, time:"15:00", batch: "2013"},
    {value: 65, time:"16:00", batch: "2013"},
    {value: 80, time:"17:00", batch: "2013"},
    {value: 85, time:"18:00", batch: "2013"},
    {value: 90, time:"19:00", batch: "2013"},
    {value: 92, time:"20:00", batch: "2013"},
    {value: 95, time:"21:00", batch: "2013"},
    {value: 46, time:"22:00", batch: "2013"},
    {value: 29, time:"23:00", batch: "2013"},
    {value: 30, time:"00:00", batch: "2014"},
    {value: 80, time:"01:00", batch: "2014"},
    {value: 70, time:"02:00", batch: "2014"},
    {value: 35, time:"03:00", batch: "2014"},
    {value: 52, time:"04:00", batch: "2014"},
    {value: 55, time:"05:00", batch: "2014"},
    {value: 61, time:"06:00", batch: "2014"},
    {value: 62, time:"07:00", batch: "2014"},
    {value: 37, time:"08:00", batch: "2014"},
    {value: 44, time:"09:00", batch: "2014"},
    {value: 65, time:"10:00", batch: "2014"},
    {value: 27, time:"11:00", batch: "2014"},
    {value: 63, time:"12:00", batch: "2014"},
    {value: 56, time:"13:00", batch: "2014"},
    {value: 40, time:"14:00", batch: "2014"},
    {value: 28, time:"15:00", batch: "2014"},
    {value: 95, time:"16:00", batch: "2014"},
    {value: 70, time:"17:00", batch: "2014"},
    {value: 65, time:"18:00", batch: "2014"},
    {value: 40, time:"19:00", batch: "2014"},
    {value: 52, time:"20:00", batch: "2014"},
    {value: 65, time:"21:00", batch: "2014"},
    {value: 66, time:"22:00", batch: "2014"},
    {value: 89, time:"23:00", batch: "2014"}

];*/

function convertToTime(time){
	return time>9?""+time+":00":"0"+time+":00";
}
/* LOAD DATA FROM CSV */
var numReady=0;
var dataFacebook = [];
d3.csv("facebook.csv", function(d) {
  return {
    value: +d.Percentage,
    time: convertToTime(+d.Time),
    batch: d.Batch,
  };
}, function(error, rows) {
	dataFacebook=rows;
	numReady++;
	if (numReady>=4)allReady();
});

var dataTwitter=[];
d3.csv("twitter.csv", function(d) {
  return {
    value: +d.Percentage,
    time: convertToTime(+d.Time),
    batch: d.Batch,
  };
}, function(error, rows) {
	dataTwitter=rows;
	numReady++;
	if (numReady>=4)allReady();
});

var dataLine = [];
d3.csv("line.csv", function(d) {
  return {
    value: +d.Percentage,
    time: convertToTime(+d.Time),
    batch: d.Batch,
  };
}, function(error, rows) {
	dataLine=rows;
	numReady++;
	if (numReady>=4)allReady();
});

var dataInstagram = [];
d3.csv("instagram.csv", function(d) {
  return {
    value: +d.Percentage,
    time: convertToTime(+d.Time),
    batch: d.Batch,
  };
}, function(error, rows) {
	dataInstagram=rows;
	numReady++;
	if (numReady>=4)allReady();
});

function allReady(){
	showChart.call(facebook,{
		data: dataFacebook,
	});
}

/* INIT CHART */
var svg = d3.select(".visualization").append('svg')
            .attr("id", "chart")
            .attr("width", width + 110)
            .attr("height", height+60);
var chart = svg.append("g")
            .classed("display", true)
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var facebook = chart.append("g")
                .classed("facebook-chart", true);
var twitter = chart.append("g")
                .classed("twitter-chart", true);
var line = chart.append("g")
                .classed("line-chart", true);
var instagram = chart.append("g")
                .classed("instagram-chart", true);

var timeParser = d3.time.format("%H:%M").parse;

// console.log("23:00");
// console.log(timeParser("23:00"));

xScale = d3.time.scale()
            /*.domain(d3.extent(dataFacebook, function(d){
                return timeParser(d.time);
            }))*/
			.domain([0, 0])
            .range([0, width]);
yScale = d3.scale.linear()
            .domain([0, 100])
            .range([height, 0]);

var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .ticks(23)
            .tickFormat(d3.time.format("%H"));
var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

var path = d3.svg.line()
            .x(function(d){
                var time = timeParser(d.time);
                return xScale(time);
            })
            .y(function(d){
                return yScale(d.value);
            })
            .interpolate("basic");

var color = [];
color["2012"] = "#aaa";
color["2013"] = "#555";
color["2014"] = "#111";

chart.append("g")
        .classed("x axis", true)
        .attr("transform", "translate(0, " + height + ")")
        ;//.call(xAxis);
chart.append("g")
    .classed("y axis", true)
    .attr("transform", "translate(0, 0)")
    .call(yAxis);

var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([-10, 0])
	.html(function(d) {
		return "<span style='color:red'>" + d.value + "</span>";
	});
svg.call(tip);
/*showChart.call(facebook,{
    data: dataFacebook,
});*/

/* DECLARE FUNCTION */
function showChart(params){
	//console.log(params.data);
    xScale = d3.time.scale()
            .domain(d3.extent(params.data, function(d){
                return timeParser(d.time);
            }))
            .range([0, width]);
	var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom")
				.ticks(23)
				.tickFormat(d3.time.format("%H"));
	chart.append("g")
        .classed("x axis", true)
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxis);
	
    var dataNest = d3.nest()
            .key(function(d) {return d.batch;})
            .entries(params.data);
    var chartThis = this;
    dataNest.forEach(function(d) {
        if (batch[d.key] == true){
            console.log("add path: " + d.key);
            chartThis.append("path")
                .attr("class", "trendline")
                .style("stroke", function(){
                //console.log(d.key);
                //console.log(color[d.key]);
                    return color[d.key];
                })
                .attr("d", path(d.values));     
        }  
    });

    this.selectAll(".point")
        .data(params.data)
        .enter()
            .append("circle").filter(function(d){
				return (batch[d.batch]);
            })
            .classed("point", true)
            .attr("r", 4)
        .attr("cx", function(d){
            var time = timeParser(d.time);
            return xScale(time);
        })
        .attr("cy", function(d){
            return yScale(d.value);
        })
		.on('mouseover', tip.show)
		.on('mouseout', tip.hide);
}

$(".social-media-button").click(function(){
    if ($(this).hasClass('selected')){
        if (!checkOnlySocialMedia(whatSocialMedia($(this)))){
            $(this).removeClass('selected');
            var thisSocialMedia = whatSocialMedia($(this));
            alterSocialMedia(thisSocialMedia);
            deleteChart(thisSocialMedia);
            showAChart(thisSocialMedia);
        }               
    } else {
        $(this).addClass('selected');
        var thisSocialMedia = whatSocialMedia($(this));
        alterSocialMedia(thisSocialMedia);
		deleteChart(whatSocialMedia( $(this).siblings('.selected')));
        $(this).siblings('.selected').removeClass('selected');
        deleteChart(thisSocialMedia);
        showAChart(thisSocialMedia);
    }
});

$(".batch-button").click(function(){
    if ($(this).hasClass('selected')){
        var thisBatch = checkBatch($(this));
        if (!checkOnlyBatch(thisBatch)){
            $(this).removeClass('selected');
            batch[thisBatch] = false;
            activeSocialMedia = whatSocialMedia($(".social-media-button.selected"));
            deleteChart(activeSocialMedia);
            showAChart(activeSocialMedia);
        }
        debugBatch();
    } else {
        $(this).addClass('selected');
        var thisBatch = checkBatch($(this));
        batch[thisBatch] = true;
        activeSocialMedia = whatSocialMedia($(".social-media-button.selected"));
        deleteChart(activeSocialMedia);
        showAChart(activeSocialMedia);
    }
})

function whatSocialMedia($element){
    if ($element.hasClass('facebook')){
        return "facebook";
    }
    if ($element.hasClass('twitter')){
        return "twitter";
    }
    if ($element.hasClass('line')){
        return "line";
    }
    if ($element.hasClass('instagram')){
        return "instagram";
    }
}

function checkBatch($element){
    if($element.hasClass('2012')){
        return "2012";
    }
    if($element.hasClass('2013')){
        return "2013";
    }
    if($element.hasClass('2014')){
        return "2014";
    }
}

function alterSocialMedia(name){
    var x;
    for (x in socialMedia){
        if (x == name){
            socialMedia[x] = true;
        } else {
            socialMedia[x] = false; 
        }
        console.log(x + " : " + socialMedia[x]);
    }
}

function debugBatch(){
    var x;
    for (x in batch){
        console.log(x + " : " + batch[x]);
    }
}

function checkOnlyBatch(name){
    var count = 0;
    var size = 0;
    var x;
    for (x in batch){
        size++;
        if (x != name && batch[x] == false ) {
            count++;
        }
    }
    if (count == (size-1) ){
        return true;
    } else {
        return false;
    }
}

function checkOnlySocialMedia(name){
    var count = 0;
    var size = 0;
    var x;
    for (x in socialMedia){
        size++;
        if (x != name && socialMedia[x] == false ) {
            count++;
        }
    }
    if (count == (size-1) ){
        return true;
    } else {
        return false;
    }   
}

function trueSocialMedia(){
    var x;
    for (x in socialMedia){
        if (socialMedia[x] == true){
            return("" + x);
        }   
    }
    return null;
}

function showAChart(name){
    if (name == "facebook"){
        showChart.call(facebook,{
            data: dataFacebook,
        });
    }
    if (name == "twitter"){
        showChart.call(twitter,{
            data: dataTwitter,
        });
    }
    if (name == "line"){
        showChart.call(line,{
            data: dataLine,
        });
    }
    if (name == "instagram"){
        showChart.call(instagram,{
            data: dataInstagram,
        });
    }
}

function deleteChart(name){
    if (name == "facebook"){
        $(".facebook-chart").empty();
    }
    if (name == "twitter"){
        $(".twitter-chart").empty();
    }
    if (name == "line"){
        $(".line-chart").empty();
    }
    if (name == "instagram"){
        $(".instagram-chart").empty();
    }
}
