const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//fetch JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
});

// Initialize the charts
function init() {
    // Select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Parse the data
    d3.json(url).then((data) => {
        // get name labels from the array
        let nameLabels = data.names;
        
        nameLabels.forEach((id) => {
            dropdownMenu.append("option")
            .text(id)
            .property("value", id);

        });
        
        // Intitalize page with first ID
        let id_one = nameLabels[0];

        BarChart(id_one);
        BubblePlot(id_one);
        Metadata(id_one);
    })
}

// Create Bar Chart
function BarChart(ids) {

        let trace1 = {
            x: "stand in",
            y: "stand in",
            text: "stand in",
            name: "stand in",
            type: "bar",
            orientation: "h"
        };


        //render the plot 
        Plotly.newPlot("bar", trace, layout)
}

// Create Bubble Plot
function BarChart(ids) {

    let trace1 = {
        x: "stand in",
        y: "stand in",
        text: "stand in",
        name: "stand in",
        type: "bubble",
        orientation: "h"
    };


    //render the plot 
    Plotly.newPlot("bubble", trace, layout)
}

// Create MetaData
function Metadata(ids) {

    let trace1 = {
        x: "stand in",
        y: "stand in",
        text: "stand in",
        name: "stand in",
        type: "bar",
        orientation: "h"
    };
}

init();