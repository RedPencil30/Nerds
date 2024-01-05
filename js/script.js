const sliderLine = document.querySelector('.slider_line');
const sliderLine2 = document.querySelector('.slider_line_2');
const slider_back = document.getElementsByClassName('change_color');
const card_back = document.getElementsByClassName('card_svg');
const head_text = document.getElementsByClassName('nav_link');
const poloska = document.getElementsByClassName('poloska');
const bar = document.getElementsByClassName('bar');
var a = 0;

sliderLine.style.left = '0%';
sliderLine2.style.left = '0%';

document.getElementById('one').style.backgroundColor = '#201510';
document.getElementById('two').style.backgroundColor = '#67564E';

document.getElementById('one2').style.backgroundColor = '#201510';
document.getElementById('two2').style.backgroundColor = '#67564E';

function comeBack() {
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
}

//Изменение цвета кнопок и фона
document.getElementById('one').addEventListener('click', function () {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    sliderLine.style.left = '0%';
    document.getElementById('one').style.backgroundColor = '#201510';
    document.getElementById('two').style.backgroundColor = '#67564E';
    for (index = poloska.length - 1; index >= 0; --index) {
        poloska[index].style.borderColor = '#FF5518';
    }
    for (index = slider_back.length - 1; index >= 0; --index) {
        slider_back[index].style.fill = '#FF5518';
    }
    for (index = card_back.length - 1; index >= 0; --index) {
        card_back[index].style.fill = '#FF5518';
    }
    document.getElementById('logo').style.color = '#201510';
    for (index = bar.length - 1; index >= 0; --index) {
        bar[index].style.backgroundColor = '#201510';
    }
    for (index = head_text.length - 1; index >= 0; --index) {
        head_text[index].style.color = '#201510';
    }
    setTimeout(comeBack, 1000);
});

document.getElementById('two').addEventListener('click', function () {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    sliderLine.style.left = '-50%';
    document.getElementById('one').style.backgroundColor = '#67564E';
    document.getElementById('two').style.backgroundColor = '#201510';
    for (index = poloska.length - 1; index >= 0; --index) {
        poloska[index].style.borderColor = '#67564E';
    }
    for (index = head_text.length - 1; index >= 0; --index) {
        head_text[index].style.color = '#ffffff';
    }
    for (index = slider_back.length - 1; index >= 0; --index) {
        slider_back[index].style.fill = '#67564E';
    }
    for (index = card_back.length - 1; index >= 0; --index) {
        card_back[index].style.fill = '#67564E';
    }
    document.getElementById('logo').style.color = '#ffffff';
    for (index = bar.length - 1; index >= 0; --index) {
        bar[index].style.backgroundColor = '#ffffff';
    }
    setTimeout(comeBack, 1000);
});


//Изменение цвета кнопок и фона 2
document.getElementById('one2').addEventListener('click', function () {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    sliderLine2.style.left = '0%';
    document.getElementById('one2').style.backgroundColor = '#201510';
    document.getElementById('two2').style.backgroundColor = '#67564E';
    setTimeout(comeBack, 1000);
});


document.getElementById('two2').addEventListener('click', function () {
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    sliderLine2.style.left = '-50%';
    document.getElementById('one2').style.backgroundColor = '#67564E';
    document.getElementById('two2').style.backgroundColor = '#201510';

    setTimeout(comeBack, 1000);
});


//Пользователь смотрит на слайдер
let observer0 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            a = 1;
            for (index = poloska.length - 1; index >= 0; --index) {
                poloska[index].style.width = '0';
            }
            if (sliderLine.style.left == '0%') {
                for (index = poloska.length - 1; index >= 0; --index) {
                    poloska[index].style.borderColor = '#C445C2';
                }
                for (index = slider_back.length - 1; index >= 0; --index) {
                    slider_back[index].style.fill = '#C445C2';
                }
                for (index = card_back.length - 1; index >= 0; --index) {
                    card_back[index].style.fill = '#C445C2';
                }
                document.getElementById('logo').style.color = '#201510';
                for (index = bar.length - 1; index >= 0; --index) {
                    bar[index].style.backgroundColor = '#201510';
                }
                for (index = head_text.length - 1; index >= 0; --index) {
                    head_text[index].style.color = '#201510';
                }
                setTimeout(colorToOrange, 190);
            } else if (sliderLine.style.left == '-50%') {
                for (index = poloska.length - 1; index >= 0; --index) {
                    poloska[index].style.borderColor = '#67564E';
                }
                for (index = slider_back.length - 1; index >= 0; --index) {
                    slider_back[index].style.fill = '#67564E';
                }
                for (index = card_back.length - 1; index >= 0; --index) {
                    card_back[index].style.fill = '#67564E';
                }
                document.getElementById('logo').style.color = '#ffffff';
                for (index = bar.length - 1; index >= 0; --index) {
                    bar[index].style.backgroundColor = '#ffffff';
                }
                for (index = head_text.length - 1; index >= 0; --index) {
                    head_text[index].style.color = '#ffffff';
                }
            }
        }
        else {
            a = 0;
        }
    });
});

observer0.observe(slider_back[0]);

function colorToOrange() {
    for (index = slider_back.length - 1; index >= 0; --index) {
        slider_back[index].style.fill = '#FF5518';
    }
    for (index = card_back.length - 1; index >= 0; --index) {
        card_back[index].style.fill = '#FF5518';
    }
    for (index = poloska.length - 1; index >= 0; --index) {
        poloska[index].style.borderColor = '#FF5518';
    }
}

function colorToBlue() {
    for (index = slider_back.length - 1; index >= 0; --index) {
        slider_back[index].style.fill = '#3CA3D2';
    }
    for (index = card_back.length - 1; index >= 0; --index) {
        card_back[index].style.fill = '#3CA3D2';
    }
    for (index = poloska.length - 1; index >= 0; --index) {
        poloska[index].style.borderColor = '#3CA3D2';
    }
}

function colorToGrey() {
    for (index = slider_back.length - 1; index >= 0; --index) {
        slider_back[index].style.fill = '#67564E';
    }
    for (index = card_back.length - 1; index >= 0; --index) {
        card_back[index].style.fill = '#67564E';
    }
    for (index = poloska.length - 1; index >= 0; --index) {
        poloska[index].style.borderColor = '#67564E';
    }
}

//Пользователь смотрит на второй блок
let observer1 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            for (index = poloska.length - 1; index >= 0; --index) {
                poloska[index].style.borderColor = '#C445C2';
            }
            poloska[0].style.width = '100%';
            poloska[1].style.width = '0';
            poloska[2].style.width = '0';
            poloska[3].style.width = '100%';
            poloska[4].style.width = '0';
            poloska[5].style.width = '0';
            for (index = slider_back.length - 1; index >= 0; --index) {
                slider_back[index].style.fill = '#C445C2';
            }
            for (index = card_back.length - 1; index >= 0; --index) {
                card_back[index].style.fill = '#C445C2';
            }
            document.getElementById('logo').style.color = '#201510';
            for (index = bar.length - 1; index >= 0; --index) {
                bar[index].style.backgroundColor = '#201510';
            }
            for (index = head_text.length - 1; index >= 0; --index) {
                head_text[index].style.color = '#201510';
            }
            if (sliderLine.style.left == '-50%') {
                setTimeout(colorToBlue, 0);
            } else {
                setTimeout(colorToBlue, 190);
            }
        }
    });
});

observer1.observe(slider_back[1]);

//Пользователь смотрит на третий блок
let observer2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            for (index = poloska.length - 1; index >= 0; --index) {
                poloska[index].style.borderColor = '#C445C2';
            }
            poloska[0].style.width = '0';
            poloska[1].style.width = '100%';
            poloska[2].style.width = '0';
            poloska[3].style.width = '0';
            poloska[4].style.width = '100%';
            poloska[5].style.width = '0';
            for (index = slider_back.length - 1; index >= 0; --index) {
                slider_back[index].style.fill = '#C445C2';
            }
            for (index = card_back.length - 1; index >= 0; --index) {
                card_back[index].style.fill = '#C445C2';
            }
            document.getElementById('logo').style.color = '#201510';
            for (index = bar.length - 1; index >= 0; --index) {
                bar[index].style.backgroundColor = '#201510';
            }
            for (index = head_text.length - 1; index >= 0; --index) {
                head_text[index].style.color = '#201510';
            }
            setTimeout(colorToOrange, 190);
        }
    });
});

observer2.observe(slider_back[2]);

//Пользователь смотрит на подвал
let observer3 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            document.getElementById('logo').style.color = '#ffffff';
            for (index = bar.length - 1; index >= 0; --index) {
                bar[index].style.backgroundColor = '#201510';
            }
            for (index = poloska.length - 1; index >= 0; --index) {
                poloska[index].style.borderColor = '#67564E';
            }
            poloska[0].style.width = '0';
            poloska[1].style.width = '0';
            poloska[2].style.width = '100%';
            poloska[3].style.width = '0';
            poloska[4].style.width = '0';
            poloska[5].style.width = '100%';
            for (index = slider_back.length - 1; index >= 0; --index) {
                slider_back[index].style.fill = '#67564E';
            }
            for (index = card_back.length - 1; index >= 0; --index) {
                card_back[index].style.fill = '#67564E';
            }
            for (index = head_text.length - 1; index >= 0; --index) {
                head_text[index].style.color = '#201510';
            }
            setTimeout(colorToGrey, 190);
        }
    });
});

observer3.observe(document.getElementsByClassName('social')[0]);

const logBlock = document.querySelector('.slider');

logBlock.addEventListener('touchstart', handleTouchStart, false);
logBlock.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;
let y1 = null;

//Определение начальных координат касания
function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
    if (!x1) {
        return false;
    }
    let y2 = event.touches[0].clientY;
    let x2 = event.touches[0].clientX;
    let xRes = x2 - x1;
    let yRes = y2 - y1;


    if (xRes < 0) {
        perX = -xRes;
    } else perX = xRes;
    if (yRes < 0) {
        perY = -yRes;
    } else perY = yRes;

    if (perX > perY) {
        if (xRes < 0) {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            if (sliderLine.style.left == '0%') {
                sliderLine.style.left = '-50%';
                document.getElementById('one').style.backgroundColor = '#67564E';
                document.getElementById('two').style.backgroundColor = '#201510';
                for (index = slider_back.length - 1; index >= 0; --index) {
                    slider_back[index].style.fill = '#67564E';
                }
                document.getElementById('logo').style.color = '#ffffff';
                for (index = bar.length - 1; index >= 0; --index) {
                    bar[index].style.backgroundColor = '#ffffff';
                }
                for (index = head_text.length - 1; index >= 0; --index) {
                    head_text[index].style.color = '#ffffff';
                }
            }
        }
        else if (xRes > 0) {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            if (sliderLine.style.left == '-50%') {
                sliderLine.style.left = '0%';
                document.getElementById('one').style.backgroundColor = '#201510';
                document.getElementById('two').style.backgroundColor = '#67564E';
                for (index = slider_back.length - 1; index >= 0; --index) {
                    slider_back[index].style.fill = '#FF5518';
                }
                document.getElementById('logo').style.color = '#201510';
                for (index = bar.length - 1; index >= 0; --index) {
                    bar[index].style.backgroundColor = '#201510';
                }
                for (index = head_text.length - 1; index >= 0; --index) {
                    head_text[index].style.color = '#201510';
                }
            }
        }
    }

    setTimeout(comeBack, 1000);
    x1 = null;
}

const logBlock2 = document.querySelector('.reviews');

logBlock2.addEventListener('touchstart', handleTouchStart2, false);
logBlock2.addEventListener('touchmove', handleTouchMove2, false);

//Определение начальных координат касания
function handleTouchStart2(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove2(event) {
    if (!x1) {
        return false;
    }
    let y2 = event.touches[0].clientY;
    let x2 = event.touches[0].clientX;
    let xRes = x2 - x1;
    let yRes = y2 - y1;


    if (xRes < 0) {
        perX = -xRes;
    } else perX = xRes;
    if (yRes < 0) {
        perY = -yRes;
    } else perY = yRes;

    if (perX > perY) {
        if (xRes < 0) {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            if (sliderLine2.style.left == '0%') {
                sliderLine2.style.left = '-50%';
                document.getElementById('one2').style.backgroundColor = '#67564E';
                document.getElementById('two2').style.backgroundColor = '#201510';
            }
        }
        else if (xRes > 0) {
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            if (sliderLine2.style.left == '-50%') {
                sliderLine2.style.left = '0%';
                document.getElementById('one2').style.backgroundColor = '#201510';
                document.getElementById('two2').style.backgroundColor = '#67564E';
            }
        }
    }

    setTimeout(comeBack, 1000);
    x1 = null;
}


//Бургер-меню

const burger = document.getElementsByClassName('burger-menu');
const closing = document.getElementsByClassName('close');
const links = document.getElementsByClassName('nav_link');
const header = document.getElementById('header');

burger[0].addEventListener('click', function () {
    document.getElementById('logo').style.color = '#201510';
    links[0].style.top = 'calc(var(--index)*6.5)';
    links[1].style.top = 'calc(var(--index)*9.8)';
    links[2].style.top = 'calc(var(--index)*13.2)';
    closing[0].style.display = 'block';
    burger[0].style.display = 'none';
    header.style.backgroundColor = '#e9e4da';
    setTimeout(hello0, 200);
    setTimeout(hello2, 300);
    setTimeout(hello3, 400);
});

closing[0].addEventListener('click', function () {
    if (sliderLine.style.left == '-50%') {
        document.getElementById('logo').style.color = '#ffffff';
        for (index = bar.length - 1; index >= 0; --index) {
            bar[index].style.backgroundColor = '#ffffff';
        }

    }
    closing[0].style.display = 'none';
    burger[0].style.display = 'block';
    setTimeout(goodbye0, 200);
    setTimeout(goodbye1, 300);
    setTimeout(goodbye2, 400);
});

function hello0() {
    links[0].style.left = '0';
}

function hello2() {
    links[1].style.left = '0';
}

function hello3() {
    links[2].style.left = '0';
}


function goodbye0() {
    links[0].style.left = '-100%';
}

function goodbye1() {
    links[1].style.left = '-100%';
}

function goodbye2() {
    links[2].style.left = '-100%';
    header.style.backgroundColor = 'transparent';
}

document.addEventListener('touchstart', (e) => {
    const click = e.composedPath().includes(header);
    if (!click && closing[0].style.display == 'block') {
        if (sliderLine.style.left == '-50%' && a == 1) {
            document.getElementById('logo').style.color = '#ffffff';
            for (index = bar.length - 1; index >= 0; --index) {
                bar[index].style.backgroundColor = '#ffffff';
            }
        }
        closing[0].style.display = 'none';
        burger[0].style.display = 'block';
        setTimeout(goodbye0, 200);
        setTimeout(goodbye1, 300);
        setTimeout(goodbye2, 400);
    }
});