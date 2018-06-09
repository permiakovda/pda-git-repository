var dateSum = new Date (2018, 0, 1, 0, 0, 0, 0);
dateSum.setSeconds(Number(process.argv[2]) + Number(process.argv[3]))
console.log(dateSum.getHours() + " Час " + dateSum.getMinutes() + " минут " + dateSum.getSeconds() + " секунд");
