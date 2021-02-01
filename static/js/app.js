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
        // function unpack(rows, index) {
        //     return rows.map(function(row) {
        //         return row[index];
        //     });
        // }

    var sampleData = importedData.samples;
        sampleData2 = sampleData.filter(r => r.id == optionValue);
        console.log(sampleData2)

    // sampleData2.sort(function(a, b) {
    //     return (b.sample_values) - (a.sample_values);
    // });

    // sampleData2 = sampleData2.slice(0,10);

    // filteredSample = filteredSample.reverse();

    var trace1 = {
        
        x: sampleData2.map(row => row.sample_values),
        y: sampleData2.map(row => row.otu_ids),
        text: sampleData2.map(row => row.otu_labels),
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
        x: sampleData2.otu_ids,
        y: sampleData2.sample_values,
        mode: 'markers',
        marker: {
            color: sampleData2.otu_ids,
            size: sampleData2.sample_values
        },
        hovertext: sampleData2.otu_labels
    };

    var data2 = [trace2];

    var layout = {
        title: "Bubble Chart"
    };

    Plotly.newPlot("bubble", data2, layout);
})