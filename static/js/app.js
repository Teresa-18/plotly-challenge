


// function unpack(rows, index) {
//     return rows.map(function(row) {
//         return row[index];
//     });
// }


function createMetadata() {
    d3.json("/samples.json").then((samples) => {
        console.log(samples)

        var metatdata = samples.metatdata

        var metadataDropdown = d3.select("#sample-metadata")

        metadataDropdown.html("");

        Object.defineProperties(metatdata).forEach(([key, value]) => {
            metadataDropdown.append("div")
            .style("break-word")
            .text("${key}: ${value}");
        });
    });
}



    data.sort(function(a, b) {
        return b.
    })

    // var data = samples;
    // //  Create the Traces
    // var trace1 = {
    //     labels: [otu_ids]
    //     x: data.map(row => row.sample_values)
    //     y: data.map(row => row.otu_ids)
    //     name: "Top 10 OTUs"
    //     type: "bar"
    //     orientation: "h"
    // };


    // var trace2 = 


    // var data = [trace1, trace2];



    // var layout = {
    //     title: ""
    //     xaxis: {title: ""},
    //     yaxis: {title: ""}
    // };

    // Plotly.newPlot()