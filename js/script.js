const menuBtn = document.querySelector(".menuBtn");
const barsBtn = document.querySelector(".fa-bars");
const xBtn = document.querySelector(".fa-times");
const menuList = document.querySelector(".menuList");
const menuItems = document.querySelectorAll("li a");

console.log(menuItems);

const showMenu = () => {
	xBtn.classList.toggle("hide");
	barsBtn.classList.toggle("hide");
	menuList.classList.toggle("showOptions");

	menuItems.forEach(item => {
		item.addEventListener('click',showMenu);
	});
};

menuBtn.addEventListener("click", showMenu);
