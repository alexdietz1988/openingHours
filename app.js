const BPL = [
    [],
    [09, 20],
    [09, 20],
    [09, 20],
    [09, 20],
    [09, 17],
    [09, 17],
    'Boston Public Library',
]

let d = new Date();
let currentWeekday = d.getDay()
let currentHour = d.getHours()
let currentMinutes = d.getMinutes()

function weekdayInEnglish(weekdayNum) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekdays[weekdayNum]
    }

function TimeInEnglish(hours, minutes) {
    return `${hours}:${minutes}`
}

console.log(`Right now it's ${weekdayInEnglish(currentWeekday)} at ${TimeInEnglish(currentHour, currentMinutes)}`)

function isItOpen(arr) {
    if (currentHour > arr[currentWeekday][0] && currentHour < arr[currentWeekday][1]) {
        return true
    }
    return false
}



console.log(isItOpen(BPL))