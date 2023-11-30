const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const OTUdata = d3.url;

console.log(OTUdata);

//fetch JSON data and console log it
d3.url.then(function(data) {
    console.log(data);
});

let trace1 = {
    x: "stand in",
    y: "stand in",
    text: "stand in",
    name: "stand in",
    type: "bar",
    orientation: "h"
};

//Data array 
let data = [trace1];

//apply a title to the layout





//render the plot 
Plotly.newPlot("plot", data, layout)