var x1 = Number(process.argv[2]);
var x2 = Number(process.argv[3]);

var xSum = x1 + x2;

var daseCount = Math.abs(Math.round((((xSum/60)/60)/24)-0.5));
var hourCount = Math.abs((Math.round(((xSum/60)/60)-0.5)) - daseCount*24);
var minetCoun = Math.abs((Math.round(((xSum/60)/60)-0.5))*60 - (Math.round((xSum/60)-0.5)));
var secondCount = Math.abs(((Math.round(((xSum/60)/60)-0.5))*60*60) + (minetCoun*60) - xSum);

if (daseCount != 0){process.stdout.write(daseCount + " дней ")}
if (hourCount != 0){process.stdout.write(hourCount + " часов ")}
if (minetCoun != 0){process.stdout.write(minetCoun + " минут ")}
if (secondCount != 0){process.stdout.write(secondCount + " секунд")}
console.log("")
