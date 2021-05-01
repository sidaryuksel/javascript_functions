function findAllAggregatedByAuthor(datas){
    var aggregateMap = new Map();

    datas.forEach(data => {
        aggreagetMap.add(data.author, {...aggregateMap.get(author), data.post_body});
    });

    //for ()
    console.log('aggregate ', aggregateMap.get(author));
}