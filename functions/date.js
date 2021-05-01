function findByHourlyAggregated(datas, hourRange) {
    console.log("------   findByHourlyAggregated  function ------");
    var datasMap = new Map();
    console.log("gethour: ",hourRange);

    //manipulate each data
    datas.forEach(data => {
        const post = data.post_body;
        const getHour = data.date_created.getUTCHours();
        const dayHourRange = getHour / hourRange;
        const dayHourSlotFixed = dayHourRange.toFixed(0);

        //check if hour slot has been set, if not create
        if (!datasMap.has(dayHourSlotFixed)) {
            datasMap.set(dayHourSlotFixed, new Array());
        }
        //push posts into hour slots
        datasMap.get(dayHourSlotFixed).push(post);        
        console.log(datasMap.get(dayHourSlotFixed));
    });
    
    for (var [key, value] of datasMap) {
        console.log(`Between ${key*hourRange} - ${key*hourRange + hourRange} hours created posts are: `, value);
    }

    console.log("================================================================");

};

exports.findByHourlyAggregated = findByHourlyAggregated;