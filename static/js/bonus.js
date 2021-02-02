// var metadata2 = metadata.filter(r => r.id == optionValue);
//         console.log(metadata2);
// var sampleData = importedData.metadata;
//         sampleData2 = sampleData.filter(r => r.id == optionValue);
//         console.log(sampleData2)

// var degrees = 180 - level,
//      radius = .5;
// var radians = degrees * Math.PI / 180;
// var x = radius * Math.cos(radians);
// var y = radius * Math.sin(radians);

var data = [
    {
      type: "indicator",
      mode: "gauge+number",
    //   pointer: {}
      title: { text: "Washes per Week", font: { size: 24 } },
      gauge: {
        axis: { range: [null, 9] },
        bar: { color: "darkblue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 1], color: "cyan" },
          { range: [1, 2], color: "purple" },
          { range: [2, 3], color: "green" },
          { range: [3, 4], color: "pink" },
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
    width: 500,
    height: 400,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "lavender",
    font: { color: "MidnightBlue", family: "Arial" }
  };
  
  Plotly.newPlot("gauge", data, layout);