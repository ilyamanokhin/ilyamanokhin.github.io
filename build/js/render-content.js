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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZW5kZXItY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0VVJMID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXNzZXRzL2RhdGEvZGF0YS5qc29uYDtcbmNvbnN0IGNvZGUgPSAgd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXTtcbmxldCBzaXRlRm9ybWF0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3N1YnRpdGxlX2JpZycpO1xubGV0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX190aXRsZV9tYWluJyk7XG5sZXQgZGVzY3JpcHRpb25Db21wYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1jb250ZW50IC5wYWdlX190ZXh0Jyk7XG5sZXQgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1wYWdlLWNvbnRlbnRfX2Rlc2NyaXB0aW9uJyk7XG5sZXQgdGFiTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1uYXYnKTtcbmxldCBzaXRlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZV9fbGlua19zaXRlXCIpO1xubGV0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaW5mb19fdGFza1wiKTtcbmxldCB0ZWNobm9sb2d5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWluZm9fX3RlY2hub2xvZ3kgLnBhZ2VfX2xpc3RcIik7XG5cbmxldCBkYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWluZm9fX2RheXMgLnBhZ2VfX3RleHQgLnBhZ2VfX251bWJlcl9kYXlzXCIpO1xubGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaW5mb19fZGF0ZSAucGFnZV9fdGV4dCBcIik7XG5cbmZ1bmN0aW9uIHNldENvbnRlbnQodmFsdWUsIGVsZW1lbnQpe1xuICAgIGlmKHZhbHVlKXtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPXZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudChhcnIpe1xuICAgZm9yKGxldCBpIG9mIGFycil7XG4gICAgbGV0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50Jyk7XG4gICAgbGV0IHBhZ2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwYWdlSW1nLmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2ltZycpO1xuICAgICAgICBwYWdlSW1nLnNyYyA9IGkuaW1hZ2VzO1xuICAgIHRhYkNvbnRlbnQuYXBwZW5kKHBhZ2VJbWcpO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZCh0YWJDb250ZW50KTtcblxuICAgIGxldCB0YWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJMaW5rLmNsYXNzTGlzdC5hZGQoJ3RhYi1saW5rJyk7XG4gICAgdGFiTGluay5pbm5lclRleHQgPSBpLnBhZ2U7XG4gICAgdGFiTmF2LmFwcGVuZCh0YWJMaW5rKTtcbiAgIH1cbiAgIFxufVxuZnVuY3Rpb24gY3JlYXRlVGVjaG5vbG9neShhcnIpe1xuICAgIHRlY2hub2xvZ3kuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IobGV0IGkgb2YgYXJyKXtcbiAgICAgICAgbGV0IGxpc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGlzdFRleHQuY2xhc3NMaXN0LmFkZCgncGFnZV9fbGlzdF90ZXh0Jyk7XG4gICAgICAgICAgICBsaXN0VGV4dC5pbm5lclRleHQgPSBpLm5hbWU7XG4gICAgICAgICAgICBsZXQgcGFnZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgICAgICAgICAgcGFnZUxpc3QuY2xhc3NMaXN0LmFkZCgncGFnZV9fbGlzdCcpO1xuICAgICAgICAgICAgZm9yKGxldCBpY29uIG9mIGkuY29udGVudCl7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0SWNvbi5jbGFzc0xpc3QuYWRkKCdwYWdlX19saXN0X2ljb24nKTtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUxpc3QuYXBwZW5kKGxpc3RJY29uKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VJbWcuY2xhc3NMaXN0LmFkZCgncGFnZV9faW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VJbWcuc3JjID0gaWNvbi5pbWFnZXM7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJY29uLmFwcGVuZChwYWdlSW1nKTtcbiAgICAgICAgICAgICAgICBsaXN0VGV4dC5hcHBlbmQocGFnZUxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB0ZWNobm9sb2d5LmFwcGVuZChsaXN0VGV4dCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXIoanNvbikge1xuICAgIGZvciAobGV0IGkgb2YganNvbi5wcm9qZWN0cykge1xuICAgICAgICBpZiAoaS5jb2RlID09PSBjb2RlKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLmNvbnRldG5bMF0uZm9ybWF0KTtcbiAgICAgICAgICAgIHNldENvbnRlbnQoaS5mb3JtYXQsIHNpdGVGb3JtYXQpO1xuICAgICAgICAgICAgc2V0Q29udGVudChpLnRpdGxlLCBtYWluVGl0bGUpO1xuICAgICAgICAgICAgc2V0Q29udGVudChpLmRlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbkNvbXBhbnkpO1xuICAgICAgICAgICAgc2V0Q29udGVudChpLnNpdGVfbGluaywgc2l0ZUxpbmspO1xuICAgICAgICAgICAgY3JlYXRlQ29udGVudChpLnBhZ2VzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0Q29udGVudChpLnRhc2ssIHRhc2spO1xuICAgICAgICAgICAgY3JlYXRlVGVjaG5vbG9neShpLnRlY2hub2xvZ3kpO1xuICAgICAgICAgICAgc2V0Q29udGVudChpLmRheXMsIGRheXMpO1xuICAgICAgICAgICAgc2V0Q29udGVudChpLmRhdGUsIGRhdGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaS5mb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbnhoci5vcGVuKCdHRVQnLCByZXF1ZXN0VVJMKTtcbnhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG54aHIuc2VuZCgpO1xueGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgcmVzcG9uc2VPYmogPSB4aHIucmVzcG9uc2U7XG4gICAgcmVuZGVyKHJlc3BvbnNlT2JqKTtcbn07XG5cblxuXG4vLyBmZXRjaChcImFzc2V0cy9kYXRhL2RhdGEuanNvblwiKVxuLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgIC50aGVuKGpzb24gPT4gY29uc29sZS5sb2coanNvbikpIl0sImZpbGUiOiJyZW5kZXItY29udGVudC5qcyJ9
