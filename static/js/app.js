d3.json("/data/samples.json").then((importedData) => {
    console.log("imported data", importedData);
})

// function unpack(rows, index) {
//     return rows.map(function(row) {
//         return row[index];
//     });
// }


function createMetadata() {

    var metadata = Object.values(importedData.metadata);
    console.log("metadata", metadata);

    var metadataDropdown = d3.select("#sample-metadata");

    metadataDropdown.html("");

    Object.entries(metadata).forEach(([key, value]) => {
        metadataDropdown.append("div")
        .text(`${key}: ${value}`);
    });
}

function createChart() {

    filteredData = Object.values(importedData.samples);
    console.log("filteredData", filteredData);

    // importedData.sort(function(a, b) {
    //     return (b.samples.otu_ids) - (a.samples.otu_ids);
    // });
    // importedData = importedData.slice(0,10);

    // importedData = importedData.reverse();

    //  Create the Traces
    var trace1 = {
        text: filteredData.map(row => row.otu_labels),
        x: filteredData.map(row => row.sample_values),
        y: filteredData.map(row => row.otu_ids),
        type: "bar",
        orientation: "h"
    };

    // var trace2 = 

    var chartData = [trace1];

    var layout = {
        title: "Top 10 OTUs",
        xaxis: {title: ""},
        yaxis: {title: ""}
    };

    Plotly.newPlot("chart", chartData, layout);
}

function createBubbleChart(){
    d3.json("/data/samples.json").then((importedData) => {
        console.log("imported data", importedData);

        var trace1 = {
            type: "Scatter",
            x: importedData.otu_ids,
            y: importedData.sample_values,
            mode: 'markers',
            marker: {
                color: importedData.samples.otu_ids,
                size: importedData.samples.sample_values
            },
            hovertext: importedData.samples.otu_labels
        };
    
        var data = [trace1];

        var layout = {
            title: "Bubble Chart"
        };

        Plotly.newPlot("bubble", data, layout);
    });
}