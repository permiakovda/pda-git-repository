var x1 = Number(process.argv[2]);
var x2 = Number(process.argv[3]);

var xSum = x1 + x2;

var hourCount = Math.abs(Math.round(((xSum/60)/60)-0.5));
var minetCoun = Math.abs((hourCount*60) - (Math.round((xSum/60)-0.5)));
var secondCount = Math.abs((hourCount*60*60) + (minetCoun*60) - xSum);

console.log(hourCount + " час " + minetCoun + " минут " + secondCount + " секунд")