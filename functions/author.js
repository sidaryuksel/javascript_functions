const findAllAggregatedByAuthor = (datas) => {
    console.log("fonksiyondayim");
    var dataArrayList = {}

    datas.forEach(data => {
        dataArrayList[data.author].push(data.post_body);
    });
    
    dataArrayList.forEach(element => {
        console.log(`${element}'s post bodies are: `,dataArrayList[element]);
    });
};

exports.findAllAggregatedByAuthor = findAllAggregatedByAuthor;