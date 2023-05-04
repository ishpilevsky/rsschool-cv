jQuery(document).ready(function() {
const btnMenu = document.querySelector('.menu-btn');
const menuOpen = document.querySelector('.nav');
btnMenu.addEventListener('click', function(){
	menuOpen.classList.toggleClass('active');
});
});