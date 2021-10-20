const reaMore = document.querySelectorAll('.read__more');
const dropDescription = document.querySelector('.reviews__description');
//const description = document.getElementsByClassName('description');
const description = document.querySelectorAll('.description');
const boxesContainer = document.querySelector('.wrapper');


//Drop down mdescription
boxesContainer.addEventListener('click', function (e) {
    let clicked = e.target.closest('.read__more');
    console.log(clicked);
    if (!clicked) return;

    //Add active arrow
    clicked.classList.toggle('active');


    //Activate content
    const content = document.querySelector(`.description--${clicked.dataset.tab}`)
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }

})









// boxesContainer.addEventListener('click', function (e) {
//     let clicked = e.target.closest('.read__more');
//     console.log(clicked);
//     if (!clicked) return;

//     //Add clear class
//     reaMore.forEach(read => {
//         read.classList.remove('active');
//     });
//     //Add active arrow
//     clicked.classList.add('active');


//     //Add hidden class
//     description.forEach(c => {
//         c.classList.add('hidden')
//     })


//     //Activate content
//     document.querySelector(`.description--${clicked.dataset.tab}`).classList.remove('hidden');

// });













// reaMore.forEach(desc => {

//     desc.addEventListener('click', function (e) {

//         let readParent = e.target;
//         console.log(readParent);

//         if (description.classList.contains('hidden')) {
//             description.classList.remove('hidden');
//             setTimeout(() => {
//                 description.classList.remove('visuallyhidden');
//             }, 20)
//             description.classList.remove('visuallyhidden');
//         } else {
//             description.classList.add('visuallyhidden');
//             description.addEventListener('transitionend', function (e) {
//                 e.preventDefault();
//                 description.classList.add('hidden');
//             }, {
//                 capture: false,
//                 once: true,
//                 passive: false,
//             });
//         }

//     }, false)

// });







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



