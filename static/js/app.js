


function unpack(rows, index) {
    return rows.map(function(row) {
        return row[index];
    });
}



d3.json("..samples.json").then(samples) => {
    console.log(data)

    

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