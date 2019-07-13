var btn_perv = document.querySelector('#gallery .buttons .prev');
                    var btn_next = document.querySelector('#gallery .buttons .next');
                    var images = document.querySelectorAll('#gallery .photos img');
                    var i = 0;
                    btn_perv.onclick = function() {
                        images[i].className = '';
                        i = i - 1; /* i-- не отрабатывает разобрать почему*/

                        if(i < 0){
                            i = images.length - 1;
                        }
                        images[i].className = 'showed';
                    }
                    btn_next.onclick = function() {
                        images[i].className = '';
                        i = i + 1; /* i-1*/

                        if(i >= images.length){
                            i = 0;
                        }
                        images[i].className = 'showed';
                    }
                    /* добавить проверку если меньше или ровно фото*/