const menuBtn = document.querySelector(".menuBtn");
const barsBtn = document.querySelector(".fa-bars");
const xBtn = document.querySelector(".fa-times");
const menuList = document.querySelector(".menuList");
const menuItems = document.querySelectorAll("li a");
const nav = document.querySelector('nav');


const handleNav = () => {
	nav.classList.toggle('move', window.scrollY > 0)
}

const showMenu = () => {
	xBtn.classList.toggle("hide");
	barsBtn.classList.toggle("hide");
	menuList.classList.toggle("showOptions");

	menuItems.forEach(item => {
		item.addEventListener('click',showMenu);
	});
};

window.addEventListener('scroll',handleNav);
menuBtn.addEventListener("click", showMenu);
