let checkboxInput = document.querySelector('.navigation__checkbox');

// chekbox is check if true
// checkboxInput.checked = true;

// console.log(checkboxInput);

let links = document.querySelectorAll('.navigation__item');

// console.log([...links]);

links.forEach(link => {
	link.addEventListener('click', () => {
		checkboxInput.checked = false;
	});
});

let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');

//  this is event capturing (top to bottom [document->html->body->div->target])
// to do this event capturing on addEventListner 3rd argument is set to true
popup.addEventListener(
	'click',
	e => {
		console.log('parent element');
		if (e.target.matches('.popup')) popupClose.click();
	},
	true
);

//  another one is event bubbling (bottom to top [target->div->body->html->document])
