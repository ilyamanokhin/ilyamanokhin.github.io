
$(document).ready(function() {



    teamSlider ();

    function teamSlider () {
        let aslider = $('.team');
        let aslist = $('.team__slider__list', aslider);
        let asitem = $('.team__slider__item', aslider);
    
        let width =  parseInt(asitem.outerWidth( true )) * -1;
        let currentLeft = 2;
    
        console.log(width);
    
        $(aslist).css({'left': width});
    
        $('.team__slider__next', aslider).click((e)=> {
            e.preventDefault();
            nextLeft = currentLeft * width;
            console.log(width);
            $(aslist).animate({"left": nextLeft }, "slow", function () {
                $('.team__slider__item:first-child', aslider).appendTo(aslist).parent().animate({"left": width }, 0);
            }); 
        });
    
        $('.team__slider__prev', aslider).click((e)=> {
            e.preventDefault();
            nextLeft = 0;
            console.log(nextLeft);
            console.log(width);
            $(aslist).animate({"left": nextLeft }, "slow", function () {
                $('.team__slider__item:last-child', aslider).prependTo(aslist).parent().animate({"left": width }, 0);
            }); 
        });
    
    }
    
    
    maintSlider ();
    
    function maintSlider () {
        let slider = $('.slider');
        let list = $('.slider__list', slider);
        let item = $('.slider__item', slider);
        let numSlider = $('.slider__num__curent', slider);
        let startNumSlider = 1;
    
        width =  parseInt(item.outerWidth( true )) * -1;
        currentLeft = 2;
    
        
        $(list).css({'left': width});
    
        $('.slider__btn__next', slider).click((e)=> {
            e.preventDefault();
            nextLeft = currentLeft * width;
            $(list).animate({"left": nextLeft }, "slow", function () {
                $('.slider__item:first-child', slider).appendTo(list).parent().animate({"left": width }, 0);
            }); 

            if ((parseInt(numSlider.text()) + 1) === 5) {
                numSlider.text(1);
            } else {
                numSlider.text((parseInt(numSlider.text()) + 1));
            }
                
        });


        nextSlide = () => {
            nextLeft = currentLeft * width;
            $(list).animate({"left": nextLeft }, "slow", function () {
                $('.slider__item:first-child', slider).appendTo(list).parent().animate({"left": width }, 0);
            }); 

            if ((parseInt(numSlider.text()) + 1) === 5) {
                numSlider.text(1);
            } else {
                numSlider.text((parseInt(numSlider.text()) + 1));
            }
                
            
        }

        timer = setInterval( nextSlide, 3000 );

        $(slider).hover(function(e){
            clearInterval(timer);
        }, function(e) {
            timer = setInterval( nextSlide, 3000);
        });
    }
    
    burgerMenu();
    
    function burgerMenu() {
        header = $('.header');
        btnOpen = $('.header__top__btn__img', header);
        btnClose = $('.header_rigth__close_btn', header);
        menu = $('.header_rigth', header);
    
        $(btnOpen).click((e) => {
            $(menu).toggleClass('active');
        });
    
        $(btnClose).click((e) => {
            $(menu).toggleClass('active');
        });
    
    }
    



});
