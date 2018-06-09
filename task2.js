var d = Number(process.argv[2]);
var m = process.argv[3];
var y = Number(process.argv[4]);

var mnomber = 0;

var monthCount = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

for (i=0; i<=monthCount.length; i++){
  if (m.localeCompare(monthCount[i]) === 0){mnomber = i}
}

var date1 = new Date(y, mnomber, d);
var date2 = new Date(y+1, 0, 0);
var daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));

console.log(daysLag)
