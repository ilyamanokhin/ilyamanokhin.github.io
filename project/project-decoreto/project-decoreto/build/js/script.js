var btn_perv = document.querySelectorAll('.prev');
var btn_next = document.querySelectorAll('.next');
var images = document.querySelectorAll('#gallery .photos img');
var images1 = document.querySelectorAll('#gallery1 .photos img');

var images2 = document.querySelectorAll('#gallery2 .photos img');
var images3 = document.querySelectorAll('#gallery3 .photos img');
var i = 0;
if(i == 0){
    images[i].className = 'showed';
    images1[i].className = 'showed';
    images2[i].className = 'showed';
    images3[i].className = 'showed';
}
btn_perv[0].onclick = function() {
    images[i].className = '';
    images1[i].className = '';
    i = i - 1; /* i-- не отрабатывает разобрать почему*/

    if(i < 0){
        i = images.length - 1;
        i = images1.length - 1;
    }
    images[i].className = 'showed';
    images1[i].className = 'showed';
}
btn_perv[1].onclick = function() {
    images[i].className = '';
    images1[i].className = '';
    i = i - 1; /* i-- не отрабатывает разобрать почему*/

    if(i < 0){
        i = images.length - 1;
        i = images1.length - 1;
    }
    images[i].className = 'showed';
    images1[i].className = 'showed';
}
btn_perv[2].onclick = function() {
    images2[i].className = '';
    images3[i].className = '';
    i = i - 1; /* i-- не отрабатывает разобрать почему*/

    if(i < 0){
        i = images2.length - 1;
        i = images3.length - 1;
    }
    images2[i].className = 'showed';
    images3[i].className = 'showed';
}
btn_perv[3].onclick = function() {
    images2[i].className = '';
    images3[i].className = '';
    i = i - 1; /* i-- не отрабатывает разобрать почему*/

    if(i < 0){
        i = images2.length - 1;
        i = images3.length - 1;
    }
    images2[i].className = 'showed';
    images3[i].className = 'showed';
}
btn_next[0].onclick = function() {
    images[i].className = '';
    images1[i].className = '';
    i = i + 1; /* i++*/

    if(i >= images.length){
        i = 0;
    }
    images[i].className = 'showed';
    images1[i].className = 'showed';
}
btn_next[1].onclick = function() {
    images[i].className = '';
    images1[i].className = '';
    i = i + 1; /* i++*/

    if(i >= images.length){
        i = 0;
    }
    images[i].className = 'showed';
    images1[i].className = 'showed';
}
btn_next[2].onclick = function() {
    images2[i].className = '';
    images3[i].className = '';
    i = i + 1; /* i++*/

    if(i >= images.length){
        i = 0;
    }
    images2[i].className = 'showed';
    images3[i].className = 'showed';
}
btn_next[3].onclick = function() {
    images2[i].className = '';
    images3[i].className = '';
    i = i + 1; /* i++*/

    if(i >= images.length){
        i = 0;
    }
    images2[i].className = 'showed';
    images3[i].className = 'showed';
}
/* сжать повторяющий код*/
/* добавить проверку если был клик по фото*/
/* добавить проверку если меньше или ровно фото*/

$(document).ready(function(){
    modalUpHide();

});
function modalUpShow(){
    $('.b-modal').css('opacity','1');
    $("#modal").fadeIn(400);
    $("body").addClass("modal-open");
}
function modalUpHide(){
    $("#modal").fadeOut(300);
    $("body").removeClass("modal-open");
}