var x1 = Number(process.argv[2]);
var x2 = Number(process.argv[3]);

var xSum = x1 + x2;

var hourCount = Math.abs(Math.round(((xSum/60)/60)-0.5));
var minetCoun = Math.abs((hourCount*60) - (Math.round((xSum/60)-0.5)));
var secondCount = Math.abs((hourCount*60*60) + (minetCoun*60) - xSum);

var hourName = ""
var minetName = ""
var secondName = ""

switch (hourCount%10) {
  case 1:
    hourName = " час ";
    break;
  case 2:
  case 3:
  case 4:
    hourName = " часа ";
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 0:
    hourName = " часов ";
    break;
  default:
}

switch (minetCoun%10) {
  case 1:
    minetName = " минута ";
    break;
  case 2:
  case 3:
  case 4:
    minetName = " минуты ";
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 0:
    minetName = " минут ";
    break;
  default:
}

switch (secondCount%10) {
  case 1:
    secondName = " секунда ";
    break;
  case 2:
  case 3:
  case 4:
    secondName = " секунды ";
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 0:
    secondName = " секунд ";
    break;
  default:
    econdName = " секунд ";
}

if (hourCount != 0){  process.stdout.write(hourCount + hourName)}
if (minetCoun != 0){process.stdout.write(minetCoun + minetName)}
if (secondCount != 0){process.stdout.write(secondCount + secondName)}
