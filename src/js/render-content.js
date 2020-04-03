const requestURL = 'http://localhost:3000/assets/data/data.json';
const cookie = getCookie('data-code');
let siteFormat = document.querySelector('.page__subtitle_big');
let mainTitle = document.querySelector('.page__title_main');
let descriptionCompany = document.querySelector('.tab-content .page__text');
let img = document.querySelectorAll('.tab-content .page__img img');
let siteLink = document.querySelector(".page__link_site");
let navLink = document.querySelectorAll(".tab-link");
let task = document.querySelector(".project-info__task");
let technology = document.querySelectorAll("page__list_text");
let days = document.querySelector(".project-info__days .page__text .page__number_days");
let date = document.querySelector(".project-info__date .page__text ");


function render(json) {
    for (let i of json.projects) {
        if (i.code === cookie) {
            // console.log(i.contetn[0].format);
            i.format ? siteFormat.innerHTML = i.format : false;
            mainTitle.innerHTML = i.title;
            // descriptionCompany.innerHTML = i.contetn.description_company;
            // siteLink.innerHTML = i.contetn.site_link;
            // task.innerHTML = i.contetn.task;
            // days.innerHTML = i.contetn.days;
            // date.innerHTML = i.contetn.date;
            console.log(i.format);
        }
    }
}


let xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.send();
xhr.onload = function () {
    let responseObj = xhr.response;
    render(responseObj);
};



// fetch("assets/data/data.json")
//   .then(response => response.json())
//   .then(json => console.log(json))