let navButton = document.querySelector(".menu i");
let navBar = document.querySelector("nav");


navButton.addEventListener("click", (e) => {
	e.preventDefault();

	navBar.classList.toggle('visible');
	navButton.classList.toggle('fa-bars');
	navButton.classList.toggle('fa-xmark');
});
