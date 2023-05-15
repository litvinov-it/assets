let menu_item = document.querySelectorAll('.menu__item')

function setActiveClass() {
	menu_item.forEach((item) => {
		item.classList.remove('active');
		this.classList.add('active');
	})
}

menu_item.forEach((item) => {
	item.addEventListener('mouseover', setActiveClass)
})