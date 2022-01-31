const menuBtn = document.querySelector(".menuBtn");
const barsBtn = document.querySelector(".fa-bars");
const xBtn = document.querySelector(".fa-times");
const menuList = document.querySelector(".menuList");
const menuItems = document.querySelectorAll("li a");
const nav = document.querySelector("nav");
const accordeon = document.querySelector(".accordeon");
const accBtn = document.querySelectorAll(".accordeon-btn");
const logo = document.querySelector('.logo');


function openAccordeonItems() {
	if (this.nextElementSibling.classList.contains("active")) {
		this.nextElementSibling.classList.remove("active");
	} else {
		closeAccordeon();
		this.nextElementSibling.classList.toggle("active");
	}
}

const closeAccordeon = () => {
	const allActiveItems = document.querySelectorAll(".accordeon-info");

	allActiveItems.forEach(item => item.classList.remove("active"));
};

const clickOutside = e => {
	if (
		e.target.classList.contains("accordeon-btn") ||
		e.target.classList.contains("accordeon-info") ||
		e.target.classList.contains("accordeon-info-text")
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

accBtn.forEach(btn => btn.addEventListener("click", openAccordeonItems));
window.addEventListener("click", clickOutside);
window.addEventListener("scroll", handleNav);
menuBtn.addEventListener("click", showMenu);
