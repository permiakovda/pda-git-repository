var x1 = Number(process.argv[2]);
var x2 = Number(process.argv[3]);


var date1 = new Date (2011, 0, 1, 0, 0, 0, 0);
var date2 = new Date (2011, 0, 1, 0, 0, 0, 0);

date1.setSeconds(x1);
date2.setSeconds(x2);



var dateSum = new Date;

console.log(date1.getSeconds());
console.log(date1.getMinutes());
console.log(date1.getHours());
