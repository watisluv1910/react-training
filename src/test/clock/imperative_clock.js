setInterval(loClockTime, 1000);

/** Function to log time */
function loClockTime() {
    const time = getClockTime();

    console.clear();
    console.log(time);
};

/** Function to get time
 * @return {string}
*/
function getClockTime() {
    const date = new Date();
    let time = '';

    time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: 'AM',
    };

    if (time.hours == 12) {
        time.ampm = 'PM';
    } else if (time.hours > 12) {
        time.ampm = 'PM';
        time.hours -= 12;
    }

    if (time.hours < 10) {
        time.hours = '0' + time.hours;
    }

    if (time.minutes < 10) {
        time.minutes = '0' + time.minutes;
    }

    if (time.seconds < 10) {
        time.seconds = '0' + time.seconds;
    }
    // Return in 'hh:mm:ss tt'
    return time.hours + ':' +
        time.minutes + ':' +
        time.seconds + ' ' +
        time.ampm;
};
