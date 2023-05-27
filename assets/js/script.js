let headerMenu = document.querySelector('.header__menu')
let headerNav = document.querySelector('.header__nav')
headerMenu.addEventListener('click', function () {
	headerMenu.classList.toggle('active')
	headerNav.classList.toggle('active')
})

let btn = document.querySelector('.header__search-btn')
let inp = document.querySelector('.header__search')
btn.addEventListener('click', function () {
	inp.classList.toggle('active')
})

let swiper = new Swiper('.mySwiper', {
	breakpoints: {
		1185: {
			slidesPerView: 5.5,
			spaceBetween: 55,
		},
		955: {
			slidesPerView: 4.5,
			spaceBetween: 45,
		},
		704: {
			slidesPerView: 3.5,
			spaceBetween: 35,
		},
		554: {
			slidesPerView: 2.5,
			spaceBetween: 25,
		},
		404: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		354: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		304: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})
