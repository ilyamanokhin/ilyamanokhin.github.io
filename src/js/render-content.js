const requestURL = `${window.location.origin}/assets/data/data.json`;
const code =  window.location.href.split('#')[1];
let siteFormat = document.querySelector('.page__subtitle_big');
let mainTitle = document.querySelector('.page__title_main');
let descriptionCompany = document.querySelector('.tab-content .page__text');
let pageContent = document.querySelector('.project-page-content__description');
let tabNav = document.querySelector('.tab-nav');
let siteLink = document.querySelector(".page__link_site");
let task = document.querySelector(".project-info__task");
let technology = document.querySelector(".project-info__technology .page__list");

let days = document.querySelector(".project-info__days .page__text .page__number_days");
let date = document.querySelector(".project-info__date .page__text ");

function setContent(value, element){
    if(value){
        element.innerHTML =value
    } else {
        return false;
    }
}

function createContent(arr){
   for(let i of arr){
    let tabContent = document.createElement("div");
        tabContent.classList.add('tab-content');
    let pageImg = document.createElement("img");
        pageImg.classList.add('page__img');
        pageImg.src = i.images;
    tabContent.append(pageImg);
    pageContent.append(tabContent);

    let tabLink = document.createElement("div");
    tabLink.classList.add('tab-link');
    tabLink.innerText = i.page;
    tabNav.append(tabLink);
   }
   
}
function createTechnology(arr){
    technology.innerHTML = "";
    for(let i of arr){
        let listText = document.createElement("li");
            listText.classList.add('page__list_text');
            listText.innerText = i.name;
            let pageList = document.createElement("ul");
                pageList.classList.add('page__list');
            for(let icon of i.content){
                let listIcon = document.createElement("li");
                    listIcon.classList.add('page__list_icon');
                    pageList.append(listIcon);
                let pageImg = document.createElement("img");
                    pageImg.classList.add('page__img');
                    pageImg.src = icon.images;
                    listIcon.append(pageImg);
                listText.append(pageList);
            }
        technology.append(listText);
    }
}

function render(json) {
    for (let i of json.projects) {
        if (i.code === code) {
            // console.log(i.contetn[0].format);
            setContent(i.format, siteFormat);
            setContent(i.title, mainTitle);
            setContent(i.description, descriptionCompany);
            setContent(i.site_link, siteLink);
            createContent(i.pages);
            
            setContent(i.task, task);
            createTechnology(i.technology);
            setContent(i.days, days);
            setContent(i.date, date);
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