/*burger*/
(function () {
    const burgerItem = document.querySelector('.header__burger');
    const menuItem = document.querySelector('.header__menu');
    burgerItem.addEventListener('click', () => {
        burgerItem.classList.toggle('active');
        menuItem.classList.toggle('active');
    });
}());
/*first swiper*/
let swiperSlider1 = new Swiper('.first-slider__container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 105,
    loop: true,
    navigation: {
        nextEl: '.first__slider-btn-right',
        prevEl: '.first__slider-btn-left',
    },
});
swiperSlider1.on('transitionEnd', function () {
    let videos = document.querySelectorAll('.first__slider video');
    videos.forEach((el) => {
        el.pause();
        el.currentTime = 0;
    });
    playButtonsFirst.forEach((el) => {
        el.style.display = 'block';
    });
});
/*first swiper play video*/
const playButtonsFirst = document.querySelectorAll('.main-slider__play');
playButtonsFirst.forEach((el) => {
    el.addEventListener('click', (e) => {
        let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
        video.play();
        e.currentTarget.style.display = 'none';
        setTimeout(() => {
            video.volume = 0.5;
        }, 1000);
    });
});
/*videos swiper*/
let swiperSlider2 = new Swiper('.swiper-container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 105,
    loop: true,
});
/*header top*/
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());
// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);
// validate forms
let validateForms = function(selector, rules) {

	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function (form, values, ajax) {
			var formData = new FormData(form);

			var xhr = new XMLHttpRequest();


			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {

					if (xhr.status === 200) {
						console.log('Отправлено!')
					} else {

					}
				}
			}

			// Add any event handlers here...
			xhr.open('POST', "mail.php", true);
            xhr.send(formData);

            form.reset();
		},
	});
}

// validateForms('.mailing__form', { email: { required: true, email: true } }, 'mailing-window', 'materialy s proshloj konferencii');
validateForms('.sign_form', { email: { required: true, email: true }, tel: { required: true } });
validateForms('.footer__form', { email: { required: true, email: true } });
