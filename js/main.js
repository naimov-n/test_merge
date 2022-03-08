// let body = document.getElementById("body");
// let karta = document.getElementById("karta");

// function uvilichit() {

//     console.log("hellow")
// }function burgerMenu() {
function deleteNonLatin(text) {
    return text.replace(/[^A-Za-z0-9]/ig, '');
}

function defineCountry() {


    let res = document.getElementsByClassName("item") &&
        Array.from(document.getElementsByClassName("item")) &&
        Array.from(document.getElementsByClassName("item")).length > 0 &&
        Array.from(document.getElementsByClassName("item"))[0] &&
        Array.from(document.getElementsByClassName("item"))[0].innerHTML ?
        Array.from(document.getElementsByClassName("item"))[0] :
        ''
    countryIsFilled = !!res
    return !!res

}

let countryIsFilled = false;




const myInput = document.querySelector('.gosBox_input');
const myInput1 = document.querySelector('.gosBox_input_povtor');
myInput.addEventListener('input', (e) => {
    const cleanValue = deleteNonLatin(e.target.value);
    e.target.value = cleanValue;
});
myInput1.addEventListener('input', (e) => {
    const cleanValue = deleteNonLatin(e.target.value);
    e.target.value = cleanValue;
});

function checkName() {
    let onIn = document.getElementById('gosBox');
    let onIns = document.getElementById('gosBoxs');
    let no = document.getElementById('no');
    let yes = document.getElementById('yes');
    let checked = document.getElementById('checked');
    let twIn = document.getElementById('gosBox_pov');
    let twsIns = document.getElementById('gosBox_povs');
    let twsIn = document.getElementById('povemail');
    let onsIn = document.getElementById('email');
    // let count = document.getElementById('count');
    let chec = document.getElementById('checkedsss');
    let avto = document.getElementById('avto');
    let v1 = document.getElementById('v1');
    let selects = document.getElementsByClassName('selectize-input');
    let selects_txt = document.getElementById('select-state-selectized');
    let span_avto = document.getElementById('span_avto');
    // let splitts = count.value.split('-');
    // let splitMark = splitts[0];
    defineCountry()
    onIn.value = onIn.value.toUpperCase();
    twIn.value = twIn.value.toUpperCase();

    if (twIn.value && onIn.value) {
        twIn.classList.remove('allert_2');
        twsIns.classList.remove('allert_2ss');
        onIn.classList.remove('allert_2');
        onIns.classList.remove('allert_2s');
    }
    if (!twIn.value && onIn.value) {
        twIn.style.color = "black";
        // twIn.style.color = "#979797";
        // onIn.style.color = "#979797";
        yes.style.display = "none";
        no.style.display = "none";
        span_avto.innerHTML = '';
        avto.innerHTML = "Не Указано";
        onIn.classList.remove('allert_2');
        onIns.classList.remove('allert_2s');
        checked.setAttribute('disabled', true);
    } else if (twIn.value && onIn.value === twIn.value && onIn.value) {

        onIn.classList.remove('allert_2');
        twIn.style.color = "black";
        yes.style.display = "block";
        no.style.display = "none";

        if (countryIsFilled == true) {
            let stvalue = Array.from(document.getElementsByClassName("item"))[0].dataset.value;
            v1.classList.remove('allert_1');
            selects[0].style.color = "#979797";
            selects[0].style.borderColor = "#3D5575";
            span_avto.innerHTML = stvalue + "- ";
            avto.innerHTML = twIn.value;
        } else {
            v1.classList.add('allert_1');
            selects_txt.classList.add('sele');
            selects[0].style.borderColor = "red";

            // console.log(selects[0].style.borderColor)
            avto.innerHTML = "Выберите страну";
        }


        // checked.removeAttribute('disabled');
    } else if (!twIn.value && !onIn.value) {
        twIn.style.color = "black";
        twIn.style.color = "";
        onIn.style.color = "";
        yes.style.display = "none";
        no.style.display = "none";
        checked.setAttribute('disabled', true);
        avto.innerHTML = "Не Указано";
        span_avto.innerHTML = '';
    } else {
        twIn.style.color = "black";
        avto.innerHTML = "Не Указано";
        span_avto.innerHTML = '';

        no.style.display = "block";
        yes.style.display = "none";
        checked.setAttribute('disabled', true);

    }
    if (countryIsFilled == true && chec.checked && onIn.value === twIn.value && onsIn.value === twsIn.value && twIn.value && twsIn.value && onIn.value && onsIn.value) {
        checked.removeAttribute('disabled');

    } else {
        checked.setAttribute('disabled', true);
    }

}


let v1 = document.getElementById('v1');
let selects = document.getElementsByClassName('selectize-input');

setTimeout(() => {
    let selects_txt = document.getElementsByClassName('item');
    let twsIn = document.getElementById('povemail');
    let onsIn = document.getElementById('email');
    let onIn = document.getElementById('gosBox');
    let twIn = document.getElementById('gosBox_pov');
    let chec = document.getElementById('checkedsss');
    let span_avto = document.getElementById('span_avto');
    let avto = document.getElementById('avto');
    let v1 = document.getElementById('v1');
    let checkeds = document.getElementById('checked');



    Array.from(document.getElementsByClassName("selectize-input"))[0].addEventListener('click', () => {
        let arr = Array.from(Array.from(document.getElementsByClassName("selectize-dropdown-content"))[0].childNodes)
        arr.forEach(el => {
            el.addEventListener('mouseleave', (e) => {

                // checkeds.removeAttribute('disabled');
                if (document.getElementById('select-state-selectized').style.width == '4px') {
                    v1.classList.remove('allert_1');
                    // selects_txt.style.color = "black";
                    selects[0].style.borderColor = "#3D5575";
                    selects_txt[0].style.color = "black"
                    if (countryIsFilled == true && chec.checked && onIn.value == twIn.value && onsIn.value == twsIn.value && twIn.value && twsIn.value && onIn.value && onsIn.value) {
                        checkeds.removeAttribute('disabled');
                        console.log('hello');
                    } else {
                        checkeds.setAttribute('disabled', true);
                        console.log('hi');
                    }
                    let stvalue = Array.from(document.getElementsByClassName("item"))[0].dataset.value;
                    if (stvalue && onIn.value == twIn.value && onIn.value && twIn.value) {
                        span_avto.innerHTML = stvalue + '-';
                        avto.innerHTML = onIn.value;
                    } else {
                        avto.innerHTML = "Введите номер"
                    }


                }
            })
        })
    })
}, 100)


function checkEmail() {
    defineCountry();
    let selects = document.getElementsByClassName('selectize-input');
    let selects_txt = document.getElementById('select-state-selectized');
    let chec = document.getElementById('checkedsss');
    let onIn = document.getElementById('email');
    let no = document.getElementById('no_email');
    let yes = document.getElementById('yes_email');
    let checked = document.getElementById('checked');
    let twIn = document.getElementById('povemail');
    let twsIn = document.getElementById('gosBox_pov');
    let onsIn = document.getElementById('gosBox');

    let email = document.getElementById('email');
    let emails = document.getElementById('emails');
    let emailss = document.getElementById('emailss');
    let povemail = document.getElementById('povemail');
    let povemails = document.getElementById('povemails');
    let gosBox_pov = document.getElementById('gosBox_pov');
    let gosBox = document.getElementById('gosBox');
    let gosBox_povs = document.getElementById('gosBox_povs');
    let gosBoxs = document.getElementById('gosBoxs');
    let dates = document.getElementById('dates');


    if (!dates.value) {
        dates.style.borderColor = 'red';
    }
    if (gosBox.value && gosBox_pov.value) {

        gosBox.classList.remove('allert_2');
        gosBox_pov.classList.remove('allert_2');
        gosBoxs.classList.remove('allert_2s');
        gosBox_povs.classList.remove('allert_2ss');

    } else if (gosBox.value && !gosBox_pov.value) {
        gosBox_pov.classList.add('allert_2');
        gosBox_povs.classList.add('allert_2ss');
    } else if (gosBox_pov.value && !gosBox.value) {
        gosBox.classList.add('allert_2');
        gosBoxs.classList.add('allert_2s');
    } else if (!gosBox_pov.value && !gosBox.value) {
        gosBox.classList.add('allert_2');
        gosBox_pov.classList.add('allert_2');
        gosBoxs.classList.add('allert_2s');
        gosBox_povs.classList.add('allert_2ss');
    } else if (!gosBox.value && !gosBox_pov.value) {

        gosBox.classList.add('allert_2');
        gosBox_pov.classList.add('allert_2');
        gosBoxs.classList.add('allert_2s');
        gosBox_povs.classList.add('allert_2ss');
    } else if (gosBox.value && !gosBox_pov.value) {


        gosBox_pov.classList.add('allert_2');

        gosBox_povs.classList.add('allert_2ss');
    } else if (!gosBox.value && gosBox_pov.value) {

        gosBox.classList.add('allert_2');

        gosBoxs.classList.add('allert_2s');

    }
    if (countryIsFilled == true) {
        v1.classList.remove('allert_1');
        selects[0].style.color = "#979797";
        selects[0].style.borderColor = "#3D5575";

    } else {
        v1.classList.add('allert_1');
        selects_txt.classList.add('sele');
        selects[0].style.borderColor = "red";

    }
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid = re.test(onIn.value);
    if (valid) {

        twIn.removeAttribute('disabled');
        if (twIn.value) {
            povemail.classList.remove('allerts_2')
            povemails.classList.remove('allerts_2ss')
        }
        if (!twIn.value && onIn.value) {
            twIn.style.color = "black";
            // twIn.style.color = "#979797";
            // onIn.style.color = "#979797";
            yes.style.display = "none";
            no.style.display = "none";
            email.classList.remove('allerts_2')
            emails.classList.remove('allerts_2s')
            emailss.innerHTML = "Не указано";
            checked.setAttribute('disabled', true);
        } else if (twIn.value && onIn.value === twIn.value && onIn.value) {
            twIn.style.color = "black";
            yes.style.display = "block";
            no.style.display = "none";
            emailss.innerHTML = onIn.value;
            povemail.classList.remove('allerts_2')
            povemails.classList.remove('allerts_2ss')
                // checked.removeAttribute('disabled');
        } else if (!twIn.value && !onIn.value) {
            twIn.style.color = "black";
            twIn.style.color = "";
            onIn.style.color = "";
            yes.style.display = "none";
            no.style.display = "none";
            emailss.innerHTML = "Не указано";
            checked.setAttribute('disabled', true);

        } else {
            emailss.innerHTML = "Не указано";

            no.style.display = "block";
            yes.style.display = "none";
            checked.setAttribute('disabled', true);
        }
        document.getElementById('email_p').classList.add('d-none');
        document.getElementById('email_p').classList.remove('d-block');
    } else {
        twIn.setAttribute('disabled', true);
        document.getElementById('email_p').classList.remove('d-none');
        document.getElementById('email_p').classList.add('d-block');
    }

    if (countryIsFilled == true && chec.checked && onIn.value === twIn.value && onsIn.value === twsIn.value && twIn.value && twsIn.value && onIn.value && onsIn.value) {
        checked.removeAttribute('disabled');

    } else {
        checked.setAttribute('disabled', true);

    }

}

$('#checkedsss').on('click', function() {
    defineCountry();
    let selects = document.getElementsByClassName('selectize-input');
    let selects_txt = document.getElementById('select-state-selectized');


    let twsIn = document.getElementById('gosBox_pov');
    let onsIn = document.getElementById('gosBox');
    let onIn = document.getElementById('email');
    let twIn = document.getElementById('povemail');
    let email = document.getElementById('email');
    let povemail = document.getElementById('povemail');
    let emails = document.getElementById('emails');
    let povemails = document.getElementById('povemails');
    let cheds = document.getElementById('checked');
    let gosBox_pov = document.getElementById('gosBox_pov');
    let gosBox = document.getElementById('gosBox');
    let gosBox_povs = document.getElementById('gosBox_povs');
    let gosBoxs = document.getElementById('gosBoxs');
    let dates = document.getElementById('dates');
    if (!dates.value) {
        dates.style.borderColor = 'red';
    }
    if (email.value && povemail.value) {
        email.classList.remove('allerts_2');
        povemail.classList.remove('allerts_2');
        emails.classList.remove('allerts_2s');
        povemails.classList.remove('allerts_2ss');
    } else if (!email.value && povemail.value) {
        email.classList.remove('allerts_2');
        emails.classList.remove('allerts_2s');
    } else if (!povemail.value && email.value) {
        povemail.classList.remove('allerts_2');
        povemails.classList.remove('allerts_2ss');
    } else {
        email.classList.add('allerts_2');
        povemail.classList.add('allerts_2');
        emails.classList.add('allerts_2s');
        povemails.classList.add('allerts_2ss');
    }

    if (countryIsFilled == true && gosBox.value && gosBox_pov.value) {
        v1.classList.remove('allert_1');
        selects[0].style.color = "#979797";
        selects[0].style.borderColor = "#3D5575";
        gosBox.classList.remove('allert_2');
        gosBox_pov.classList.remove('allert_2');
        gosBoxs.classList.remove('allert_2s');
        gosBox_povs.classList.remove('allert_2ss');

    } else if (countryIsFilled == true && gosBox.value && !gosBox_pov.value) {
        gosBox_pov.classList.add('allert_2');
        gosBox_povs.classList.add('allert_2ss');
    } else if (countryIsFilled == true && gosBox_pov.value && !gosBox.value) {
        gosBox.classList.add('allert_2');
        gosBoxs.classList.add('allert_2s');
    } else if (countryIsFilled == true && !gosBox_pov.value && !gosBox.value) {
        gosBox.classList.add('allert_2');
        gosBox_pov.classList.add('allert_2');
        gosBoxs.classList.add('allert_2s');
        gosBox_povs.classList.add('allert_2ss');
    } else if (countryIsFilled == false && gosBox.value && gosBox_pov.value) {
        v1.classList.add('allert_1');
        selects_txt.classList.add('sele');
        selects[0].style.borderColor = "red";
    } else if (countryIsFilled == false && !gosBox.value && !gosBox_pov.value) {
        v1.classList.add('allert_1');
        selects_txt.classList.add('sele');
        selects[0].style.borderColor = "red";
        gosBox.classList.add('allert_2');
        gosBox_pov.classList.add('allert_2');
        gosBoxs.classList.add('allert_2s');
        gosBox_povs.classList.add('allert_2ss');
    } else if (countryIsFilled == false && gosBox.value && !gosBox_pov.value) {
        v1.classList.add('allert_1');
        selects_txt.classList.add('sele');
        selects[0].style.borderColor = "red";

        gosBox_pov.classList.add('allert_2');

        gosBox_povs.classList.add('allert_2ss');
    } else if (countryIsFilled == false && !gosBox.value && gosBox_pov.value) {
        v1.classList.add('allert_1');
        selects_txt.classList.add('sele');
        selects[0].style.borderColor = "red";
        gosBox.classList.add('allert_2');

        gosBoxs.classList.add('allert_2s');

    }
    if ($(this).is(':checked') && countryIsFilled == true && onIn.value === twIn.value && onsIn.value === twsIn.value && twIn.value && twsIn.value && onIn.value && onsIn.value) {
        cheds.removeAttribute('disabled');
    } else {
        cheds.setAttribute('disabled', true)
    }
});

function burgerMenu() {
    let burger = document.getElementById('menu');
    burger.classList.toggle('opacitys');

}


$(document).ready(function() {

    $('select').selectize({
        sortField: 'text',

    });
});

jQuery(($) => {
    $('.select').on('click', '.select__head', function() {

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function() {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});


function checkCookies() {
    let cookieDate = localStorage.getItem('cookieDate');
    let cookieNotification = document.getElementById('cookie_notification');
    let cookieBtn = cookieNotification.querySelector('.cookie_accept');

    // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
    if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
        cookieNotification.classList.add('show');
    }

    // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
    cookieBtn.addEventListener('click', function() {
        localStorage.setItem('cookieDate', Date.now());
        cookieNotification.classList.remove('show');
    })
}
checkCookies();

function changeTarif(el) {
    defineCountry();
    let selects = document.getElementsByClassName('selectize-input');
    let selects_txt = document.getElementById('select-state-selectized');
    let god = document.getElementById('god');
    let dnev = document.getElementById('dnev');
    let dnevTwo = document.getElementById('dnevTwo');
    let type = document.getElementById('day_end');
    let check = document.getElementById('checkbox');
    // let count = document.getElementById('count');
    let gosBox_pov = document.getElementById('gosBox_pov');
    let gosBox = document.getElementById('gosBox');
    let gosBox_povs = document.getElementById('gosBox_povs');
    let gosBoxs = document.getElementById('gosBoxs');
    let dates = document.getElementById('dates');
    if (!dates.value) {
        dates.style.borderColor = 'red';
    }
    if (countryIsFilled == true) {
        v1.classList.remove('allert_1');
        selects[0].style.color = "#979797";
        selects[0].style.borderColor = "#3D5575";

    } else {
        v1.classList.add('allert_1');
        selects_txt.classList.add('sele');
        selects[0].style.borderColor = "red";

    }
    if (gosBox.value && gosBox_pov.value) {

        gosBox.classList.remove('allert_2');
        gosBox_pov.classList.remove('allert_2');
        gosBoxs.classList.remove('allert_2s');
        gosBox_povs.classList.remove('allert_2ss');

    } else if (gosBox.value && !gosBox_pov.value) {
        gosBox_pov.classList.add('allert_2');
        gosBox_povs.classList.add('allert_2ss');
    } else if (gosBox_pov.value && !gosBox.value) {
        gosBox.classList.add('allert_2');
        gosBoxs.classList.add('allert_2s');
    } else if (!gosBox_pov.value && !gosBox.value) {
        gosBox.classList.add('allert_2');
        gosBox_pov.classList.add('allert_2');
        gosBoxs.classList.add('allert_2s');
        gosBox_povs.classList.add('allert_2ss');
    } else if (!gosBox.value && !gosBox_pov.value) {

        gosBox.classList.add('allert_2');
        gosBox_pov.classList.add('allert_2');
        gosBoxs.classList.add('allert_2s');
        gosBox_povs.classList.add('allert_2ss');
    } else if (gosBox.value && !gosBox_pov.value) {


        gosBox_pov.classList.add('allert_2');

        gosBox_povs.classList.add('allert_2ss');
    } else if (!gosBox.value && gosBox_pov.value) {
        v1.classList.add('allert_1');

        gosBox.classList.add('allert_2');

        gosBoxs.classList.add('allert_2s');

    }


    if (el == 1) {
        god.classList.add('hover_tarif');
        dnev.classList.remove('hover_tarif');
        dnevTwo.classList.remove('hover_tarif');
        if (check.checked) {
            type.innerHTML = "Годовая - 30 <div class='barglani'><img src='../assets/icons/barg.svg' alt='404' ><p class='ecosena'>Эко цена</p></div>";
            sena1 = 30;
        } else {
            sena1 = 45;
            type.innerHTML = "Годовая - 45€";
        }


    } else if (el == 2) {
        dnev.classList.add('hover_tarif');
        god.classList.remove('hover_tarif');
        dnevTwo.classList.remove('hover_tarif');


        if (check.checked) {
            sena1 = 20;
            type.innerHTML = "30-дневная - 20€ <div class='barglani'><img src='../assets/icons/barg.svg' alt='404' ><p class='ecosena'>Эко цена</p></div>";
        } else {
            sena1 = 25;
            type.innerHTML = "30-дневная - 25€";
        }

    } else if (el == 3) {
        dnevTwo.classList.add('hover_tarif');
        dnev.classList.remove('hover_tarif');
        god.classList.remove('hover_tarif');


        if (check.checked) {
            sena1 = 10;
            type.innerHTML = "10-дневная - 10€ <div class='barglani'><img src='../assets/icons/barg.svg' alt='404' ><p class='ecosena'>Эко цена</p></div>";
        } else {
            sena1 = 15;
            type.innerHTML = "10-дневная - 15€";
        }

    }

    let twsIn = document.getElementById('povemail');
    let onsIn = document.getElementById('email');
    let onIn = document.getElementById('gosBox');
    let twIn = document.getElementById('gosBox_pov');
    let chec = document.getElementById('checkedsss');
    if (countryIsFilled == true && chec.checked && onIn.value === twIn.value && onsIn.value === twsIn.value && twIn.value && twsIn.value && onIn.value && onsIn.value) {
        checked.removeAttribute('disabled');

    } else {
        checked.setAttribute('disabled', true);
    }
    calc();




}
// 
let exis = document.getElementById("tool");
let existwo = document.getElementById("tooltwo");




function br(el) {
    if (el == 1) {
        existwo.style.display = "block";
        exis.style.display = "none";
    } else if (el == 3) {
        exis.style.display = "block";
        existwo.style.display = "none";
    } else if (el == 2) {
        existwo.style.display = "none";
    } else if (el == 4) {
        exis.style.display = "none";
    }
    existwo.click(function(event) {
        e = event || window.event
        if (e.target == this) {
            $(existwo).css('display', 'none')
        }
    })
}
$(document).mouseup(function(e) {
    var modalctr = $("#tool");
    var modal = $("#tooltwo");
    if (!modalctr.is(e.target) && modalctr.has(e.target).length === 0) {
        modalctr.hide();
        modal.hide();
    }
});