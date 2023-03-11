import {flowRight as compose} from 'lodash';

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = (message) => console.log(message);

/**
 * Formats date into time object
 * @param { date } date
 * @return { object } clockTime
 */
const serializeClockTime = (date) => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
});

/**
 * Converts hours to civilian style
 * @param { object } clockTime
 * @return { object } changed copy of clockTime
 */
const civilianHours = (clockTime) => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

/**
 * Adds times of day to clockTime object
 * @param { object } clockTime
 * @return { object } changed copy of clockTime
 */
const appendIndicators = (clockTime) => ({
    ...clockTime,
    indicator: clockTime.hours >= 12 ? 'PM' : 'AM',
});

const display = (target) => (time) => target(time);

/**
 * Uses template string to format clockTime
 * @param { string } format
 * @return { function(time): string }
 */
const formatClock = (format) => (time) =>
    format
        .replace('hh', time.hours)
        .replace('mm', time.minutes)
        .replace('ss', time.seconds)
        .replace('tt', time.indicator);

/**
 * Adds '0' before the clockTime[key] value if < 10
 * @param { string } key
 * @return { function(clockTime): object }
 */
const prependZero = (key) => (clockTime) => ({
    ...clockTime,
    key: clockTime[key] < 10 ? '0' + clockTime[key] : clockTime[key],
});

/**
 * Converts clockTime to civilian time
 * @param { object } clockTime
 * @return { function(clockTime): object }
 */
const convertToCivilianTime = (clockTime) =>
    compose(
        appendIndicators,
        civilianHours,
    )(clockTime);

/**
 * Provides correct time rendering adding '0'
 * @param { object } civilianTime
 * @return { function(clockTime): object }
 */
const doubleDigits = (civilianTime) =>
    compose(
        prependZero('hours'),
        prependZero('minutes'),
        prependZero('seconds'),
    )(civilianTime);

/**
 * Starts clock
 * @return { function(): Number } intervalID
 */
const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock('hh:mm:ss tt'),
            display(log),
        ), oneSecond(),
    );

startTicking();
