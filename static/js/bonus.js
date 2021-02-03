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

        metadata2 = metadata.filter(r => r.id == optionValue);
        console.log(metadata2);


var data = [
    {
        value: (metadata2[0].wfreq),
        type: "indicator",
        mode: "gauge+number",
        title: { text: "Washes per Week", font: { size: 24 } },
        gauge: {
            axis: { range: [null, 9] },
            bar: { color: "darkblue" },
            // bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
                { range: [0, 1], color: "cyan", text: "0-1" },
                { range: [1, 2], color: "purple", text: "1-2" },
                { range: [2, 3], color: "green", text: "2-3" },
                { range: [3, 4], color: "pink", text: "3-4" },
                { range: [4, 5], color: "BlueViolet" },
                { range: [5, 6], color: "Crimson" },
                { range: [6, 7], color: "DarkCyan" },
                { range: [7, 8], color: "DeepPink" },
                { range: [8, 9], color: "GreenYellow" }
            ],
        }
    }
];

var layout = {
    width: 400,
    height: 300,
    margin: { t: 25, r: 20, l: 20, b: 25 },
    paper_bgcolor: "lavender",
    font: { color: "MidnightBlue", family: "Arial" }
};

Plotly.newPlot("gauge", data, layout);