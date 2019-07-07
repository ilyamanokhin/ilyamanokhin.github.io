//открытие по кнопке
$('.popup').click(function () {
    $('.modalDialog').fadeIn();
});
//закрытие на крестик
$('.close').click(function () {
    $('.modalDialog').fadeOut();
});