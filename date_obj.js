/*
    Date objects
        objects that contain values that represents
        dates and times
        These date objects can changed and formatted
*/

//Date(year, month, day , hour, minute, second, millisecond)
//month starts from 0 - Jan, 1 - Feb etc.
// const date = new Date(1000000000000);     milliseconds since epic date
// const date = new Date(2024, 2, 10, 6, 30, 25, 500);   specific date and time
// const date = new Date("2024-06-12T12:00:30Z");     specific date and time in string format

const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

date.setFullYear(2024);
date.setMonth(2);
date.setDate(12);
date.setHours(8);
date.setMinutes(56);
date.setSeconds(32);

// console.log(year);
// console.log(month+1);
// console.log(day);
// console.log(hour-12);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

console.log(date)