

const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    //Scrolling with requestAnimationFrame

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                
                let widthTop = document.documentElement.scrollTop,
                    hash = this.hash,
                    toBlock =document.querySelector(hash).getBoundingClientRect().top, //верхняя граница к которой скроллим
                    start = null;//стартовая позиция 

                requestAnimationFrame(step);

                function step(time) {
                    if (start === null) {
                        start = time;
                    }

                    let progress = time - start,
                        r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock) ); //понять на сколько пикселей нужо пролистать и в каую сторну - в течении этой анимации; widthTop - progress/speed смотрим сколько пролистал / делим на скорость и отнимаем от общего скролл топа 

                    document.documentElement.scrollTo(0, r); // по Х не двигаем, по Y двигаем к r

                    if (r != widthTop + toBlock) { //если равна, значит долистали
                        requestAnimationFrame(step);
                    } else {
                        location.hash = hash;
                    }

                } 

        });
    });

    //Pure js scrolling
   /*  const element = document.documentElement,
        body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function(event) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop); //какое расстояние пролистано уже вниз вцелом - проверка на старые браузеры

            if (this.hash !== '') {
                event.preventDefault();
                let hashElement = document.querySelector(this.hash),
                    hashElementTop =0;
                while (hashElement.offsetParent) { //родитель
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop); //сколько пикселей до родителя
                smoothScroll(scrollTop, hashElementTop, this.hash)
            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;

        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function() {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (
                prevScrollTop === scrollTop || 
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) 
            {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    };
    calcScroll(); */
};

export default scrolling;