const reaMore = document.querySelectorAll('.read__more');
const dropDescription = document.querySelector('.reviews__description');
const description = document.querySelectorAll('.description');
const boxesContainer = document.querySelector('.wrapper');
const seeMore = document.querySelector('.btn-more');


//Drop down description
const dropContent = function (e) {
    let clicked = e.target.closest('.read__more');
    if (!clicked) return;

    //Add active arrow
    clicked.classList.toggle('active');

    //Activate content
    const content = document.querySelector(`.description--${clicked.dataset.tab}`)
    content.classList.toggle('hidden')

};

boxesContainer.addEventListener('click', dropContent)



//Button see more
let currentItem = 3;

const moreContent = function (e) {
    const elementList = document.querySelectorAll('.wrapper__offer');
    for (i = currentItem; i < currentItem + 3; i++) {
        console.log(i);
        if (elementList[i]) {
            elementList[i].style.display = 'block';
        }
    }
    currentItem += 3;


    // Load more button will be hidden after list fully loaded
    if (currentItem >= elementList.length) {
        event.target.style.display = 'none';
    }

}
seeMore.addEventListener('click', moreContent);

// Live photo Carousel
const carouselItem = document.querySelectorAll('.carussel__img');


setInterval(() => {
    carouselItem.forEach((img, i) => {

        img.style.translateX = 'calc(-250px * 9)'

    });


}, 1000);










//Frequently Asked Questions
const questionBtn = document.querySelectorAll('.questions__btn');
const questionContent = document.querySelectorAll('.questions__content');


for (let i = 0; i < questionContent.length; i++) {

    questionBtn[i].addEventListener('click', () => {
        questionContent[i].classList.toggle('active');
        questionBtn[i].classList.toggle('active');
    })

}



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


//Year update footer
const bottomYear = function () {
    const yearRight = document.getElementById('copy');
    const yearUpdate = new Date().getFullYear();
    yearRight.innerHTML = `Copyright <html>&copy;</html> ${yearUpdate}`;
}

bottomYear();


//Drop down menu
const navMenu = document.querySelector('.nav__menu');
const mobMenu = document.querySelector('.mobile__menu');


function burgerMenu() {

    if (!navMenu.classList.contains('active') && !mobMenu.classList.contains('active')) {
        navMenu.classList.add('active');
        mobMenu.classList.add('active');
    } else {
        navMenu.classList.remove('active');
        mobMenu.classList.remove('active');
    }
}

mobMenu.addEventListener('click', burgerMenu)
