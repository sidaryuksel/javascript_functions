 function calculateDayAfter(day, after) {
    var myMap = new Map();
    myMap.set('Mon', 0); myMap.set('Tue', 1); myMap.set('Wed', 2);
    myMap.set('Thu', 3); myMap.set('Fri', 4); myMap.set('Sat', 5); myMap.set('Sun', 6); 
    
    const value = myMap.get(day);
    const dayAfter = (value + after) % 7;
    var dayAfterDate;
    myMap.forEach((value, key) => {
        if (value === dayAfter) {
            dayAfterDate = key;
        }
    });
    return dayAfterDate || 'day can not be found';
}

export {calculateDayAfter};