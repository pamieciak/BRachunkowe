const menuBtn = document.querySelector(".burger-menu__menuBtn");
const logo = document.querySelector(".burger-menu__logo");

const barsBtn = document.querySelector(".fa-bars");
const xBtn = document.querySelector(".fa-times");

const menuList = document.querySelector(".menuList");
const menuItems = document.querySelectorAll("li a");
const nav = document.querySelector("nav");


const accordeon = document.querySelectorAll('.accordeon')



function openAccordeonItems() {
	
	if (this.classList.contains("active") ) {
		this.classList.remove("active")
	
	} else {
		closeAccordeon();
		this.classList.toggle("active");

	}
	
}

const closeAccordeon = () => {
	const allActiveItems = document.querySelectorAll(".accordeon");

	allActiveItems.forEach(item => item.classList.remove("active"));
};

const clickOutside = e => {
	if (
		e.target.classList.contains("accordeon") ||
		e.target.classList.contains("accordeon__title") ||
		e.target.classList.contains("accordeon__text")
	) {
		return;
	}

	closeAccordeon();
};

const handleNav = () => {
	nav.classList.toggle("move", window.scrollY > 0);
	logo.classList.toggle("move", window.scrollY > 0);
};

const showMenu = () => {
	xBtn.classList.toggle("hide");
	barsBtn.classList.toggle("hide");
	menuList.classList.toggle("showOptions");

	menuItems.forEach(item => {
		item.addEventListener("click", showMenu);
	});
};



accordeon.forEach(acc => acc.addEventListener('click', openAccordeonItems
))
window.addEventListener("click", clickOutside);
window.addEventListener("scroll", handleNav);
menuBtn.addEventListener("click", showMenu);
