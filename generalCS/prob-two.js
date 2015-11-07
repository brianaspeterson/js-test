function avgMinutes(times) {

    var totalPer = 0,
        avgTotal = 0,
        finalTotal = 0,
        dayNum = 0,
        amPM = 0,
        x;
    var array = [],
        timeAmtHour = 0,
        timeAmtMin = 0,
        finalAvg = 0;
    var eightHours = 480;

    times.forEach(function (time) {

        time.length === 16 ? x = 16 : x = 15;
        dayNum = time.substring(14, x);
        dayNum = parseInt(dayNum, 10);
        dayNum = 60 * 24 * (dayNum - 1);
        amPM = time.substring(6, 8);
        amPM === "PM" ? totalPer = 12 * 60 : totalPer = 0;
        timeAmtHour = time.substring(0, 2);
        timeAmtHour = parseInt(timeAmtHour, 10);
        timeAmtHour === 12 ? timeAmtHour = 0 : timeAmtHour = timeAmtHour * 60
        timeAmtMin = time.substring(3, 5);
        timeAmtMin = parseInt(timeAmtMin, 10)
        avgTotal = (dayNum + totalPer + timeAmtMin + timeAmtHour) - eightHours;
        array.push(avgTotal);
    });

    array.forEach(function (entry) {
        finalTotal += entry;

    });
    finalAvg = finalTotal / (times.length);
    finalAvg = Math.round(finalAvg);
}
