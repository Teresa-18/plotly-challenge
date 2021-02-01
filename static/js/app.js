d3.json("/data/samples.json").then((importedData) => {
    console.log(importedData);
    var selectId = d3.select("#selDataset")
    var testIds = importedData.names
    testIds.forEach(name => {
        selectId.append("option")
            .property("value", name).text(name)

    });
    var optionValue = selectId.property("value");

    var metadata = importedData.metadata;
    // console.log("metadata", metadata);
    console.log(optionValue)
    var metadataDropdown = d3.select("#sample-metadata");
   
        metadata2 = metadata.filter(r => r.id == optionValue);
        console.log(metadata2);

    metadataDropdown.html("");

    Object.entries(metadata2[0]).forEach(([key, value]) => {
        metadataDropdown.append("p")
        .text(`${key}: ${value}`);
    });
})