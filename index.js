import {calculateDayAfter} from './functions/day.js' 

//findAllAggregatedByAuthor();
//findByHourlyAggregated(2);
console.log('2 days after Monday is : ', calculateDayAfter('Mon', 2));
console.log('14 days after Friday is : ', calculateDayAfter('Fri', 14));
console.log('10 days after Friday is : ', calculateDayAfter('Fri', 2));