const BPL = [
    [],
    [09, 20],
    [09, 20],
    [09, 20],
    [09, 20],
    [09, 17],
    [09, 17],
    'The Boston Public Library',
]

const CPL = [
    [13, 17],
    [09, 21],
    [09, 21],
    [09, 21],
    [09, 21],
    [09, 17],
    [09, 17],
    'The Cambridge Public Library',
]

const starbucksKendall = [
    [06, 20], // It actually opens at 5:30am
    [05, 20],
    [05, 20],
    [05, 20],
    [05, 20],
    [05, 20],
    [09, 17], // It actually opens at 5:30am
    'Starbucks Kendall',
]

const caffeNero = [
    [07, 17],
    [07, 17],
    [07, 17],
    [07, 17],
    [07, 17],
    [07, 17],
    [07, 17],
    'Caffe Nero',
]

const workplaces = [BPL, CPL, starbucksKendall, caffeNero];

let d = new Date();
let currentWeekday = d.getDay()
let currentHour = d.getHours()
let currentMinutes = d.getMinutes()

function weekdayInEnglish(weekdayNum) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekdays[weekdayNum]
    }

function timeInEnglish(hours) {
    if (hours > 12) return `${hours - 12}pm`;
    else return `${hours}am`;
}

function isItOpen(arr) {
    if (currentHour > arr[currentWeekday][0] && currentHour < arr[currentWeekday][1]) {
        return true;
    };
    return false;
}

function getMessage(arr) {
    if (isItOpen(arr) === true) {
        return `${arr[7]} is open! It closes today at ${timeInEnglish(arr[currentWeekday][1])}.`
    }
    else {
        return `${arr[7]} is currently closed.`
    }
}

console.log(getMessage(workplaces[1]))

const rightNow = document.createElement('p')
rightNow.innerHTML = `Right now it's ${weekdayInEnglish(currentWeekday)} at ${timeInEnglish(currentHour)}.`
document.body.appendChild(rightNow)

for (let i = 0; i < workplaces.length; i++) {
    if (isItOpen(workplaces[i]) === true) {
        let message = document.createElement('p');
        message.innerHTML = getMessage(workplaces[i]);
        document.body.appendChild(message)
    }
}

for (let i = 0; i < workplaces.length; i++) {
    if (isItOpen(workplaces[i]) === false) {
        let message = document.createElement('p');
        message.innerHTML = getMessage(workplaces[i]);
        document.body.appendChild(message)
        }
}