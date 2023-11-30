const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const OTUdata = d3.url;

console.log(OTUdata);

//fetch JSON data and console log it
d3.url.then(function(data) {
    console.log(data);
});