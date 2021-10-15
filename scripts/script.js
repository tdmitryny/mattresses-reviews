//Live Date header 
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const mounths = new Date();
const date = new Date().getDate() - 1;
const stringMonth = monthNames[mounths.getMonth()];
const year = new Date().getFullYear();



const dateUpdates = function (day, mounth, year) {
    const dateChange = document.querySelector('.date');
    dateChange.textContent = `Last updated - ${day} ${mounth} ${year}`;
    document.querySelector('.title__about').append(dateChange);
}

dateUpdates(date, stringMonth, year);



