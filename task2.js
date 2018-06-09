var d = Number(process.argv[2]);
var m = process.argv[3];
var y = Number(process.argv[4]);

var mnomber = 0;

var monthCount = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

for (i=0; i<=monthCount.length; i++){
  if (m.localeCompare(monthCount[i]) === 0){mnomber = i}
}

console.log(mnomber)
