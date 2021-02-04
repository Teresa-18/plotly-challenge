
function initialize() {
//**initial start up populate Test Subject ID No */
d3.json("/data/samples.json").then((importedData) => {
    console.log(importedData);
    var selectId = d3.select("#selDataset")
    var testIds = importedData.names
    testIds.forEach(name => {
        selectId.append("option")
            .property("value", name).text(name)

    });
    //**start Demographic Info */    
    var optionValue = selectId.property("value");

    var metadata = importedData.metadata;

    console.log(optionValue)
    var metadataDropdown = d3.select("#sample-metadata");
   
        metadata2 = metadata.filter(r => r.id == optionValue);
        console.log(metadata2);

    metadataDropdown.html("");

    Object.entries(metadata2[0]).forEach(([key, value]) => {
        metadataDropdown.append("p")
        .text(`${key}: ${value}`);
    });
    //**start H-Bar chart */

    var sampleData = importedData.samples;
        sampleData2 = sampleData.filter(r => r.id == optionValue);
        console.log(sampleData2)

        
    var xValue = sampleData2[0].sample_values.slice(0, 10).reverse();
        console.log(xValue)

    var yValue = sampleData2[0].otu_ids.slice(0, 10).reverse();
        yValue = yValue.map(d => "OTU " + d)
        console.log(yValue)


    var trace1 = {
        
        x: xValue,
        y: yValue,
        text: sampleData2[0].otu_labels,
        type: "bar",
        orientation: "h"
    };

    var chartData = [trace1];

    var layout = {
        title: "Top 10 OTUs",
        xaxis: {title: ""},
        yaxis: {title: ""}
    };

    Plotly.newPlot("chart", chartData, layout);

    //**start Bubble Chart */
    var trace2 = {
        type: "Scatter",
        x: sampleData2[0].otu_ids,
        y: sampleData2[0].sample_values,
        mode: 'markers',
        marker: {
            color: sampleData2[0].otu_ids,
            size: sampleData2[0].sample_values
        },
        hovertext: sampleData2[0].otu_labels
    };

    var data2 = [trace2];

    var layout = {
        title: "Bubble Chart"
    };

    Plotly.newPlot("bubble", data2, layout);

    //** BONUS*/

    var data = [
        {
            value: (metadata2[0].wfreq),
            type: "indicator",
            mode: "gauge+number",
            title: { text: ("Belly Button Washes per Week"), font: { size: 26 } },
            gauge: {
                axis: { range: [null, 9] },
                bar: { color: "darkblue" },
                // bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                    { range: [0, 1], color: "LightCyan" },
                    { range: [1, 2], color: "LightSkyBlue" },
                    { range: [2, 3], color: "DeepSkyBlue" },
                    { range: [3, 4], color: "Lavender" },
                    { range: [4, 5], color: "MediumPurple" },
                    { range: [5, 6], color: "RebeccaPurple" },
                    { range: [6, 7], color: "PaleGreen" },
                    { range: [7, 8], color: "MediumSeaGreen" },
                    { range: [8, 9], color: "Green" }
                ],
            }
        }
    ];
    
    var layout = {
        width: 400,
        height: 300,
        margin: { t: 25, r: 20, l: 20, b: 25 },
        paper_bgcolor: "Axure",
        font: { color: "MidnightBlue", family: "Arial" }
    };
    
    Plotly.newPlot("gauge", data, layout);
})
}
function optionChanged() {
    initialize()
}
initialize()