var x1 = Number(process.argv[2]);
var x2 = Number(process.argv[3]);

var xSum = x1 + x2;


var hourCount = Math.abs(Math.round(((xSum/60)/60)-0.5));
var minetCoun = Math.abs((hourCount*60) - (Math.round((xSum/60)-0.5)));
var secondCount = Math.abs((hourCount*60*60) + (minetCoun*60) - xSum);

// var minetCount = Math.round((xSum/60)-0.5);
// var hourCount = Math.round(((xSum/60)/60)-0.5);
// var secondCount = xSum - hourCount*60*60 - minetCount*60;


console.log(hourCount)
console.log(minetCoun)
console.log(secondCount)
