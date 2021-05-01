function findAllAggregatedByAuthor(datas) {
    console.log("================================================================");

    console.log("------   findAllAggregatedByAuthor  function ------");
    var datasMap = new Map();

    datas.forEach(data => {
        const post = data.post_body;

        if (!datasMap.has(data.author)) {
            datasMap.set(data.author, new Array());
        }
        datasMap.get(data.author).push(post);
    });

    for (var [key, value] of datasMap) {
        console.log(`${key}'s post bodies are: `, value);
    }

    console.log("================================================================");
};

exports.findAllAggregatedByAuthor = findAllAggregatedByAuthor;