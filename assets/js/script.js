$(document).ready(function(){

// functions
function mooving_snake(){
		// console.log('je bouge !');
		// console.warn('More mooving');
}

let snake = $('#snake');
let items_pop =  $('.items_pop');

		// JS Way
		// let root = document.documentElement;
		// root.style.setProperty('--x','100%');


		//Faire déplacer le Snake au Clavier
		$(document).on('keydown',function(e){

				let the_key = e.which;
				console.log(e.which);

				switch(the_key){

					case '37':
					snake.toggleClass('to-left');
					break;

					case '38':
					snake.toggleClass('to-right');
					break;

					case '39':
					snake.toggleClass('to-up');
					break;

					case '40':
					snake.toggleClass('to-bottom');
					break;

					default:
					console.warn('press the direction key mother fucke !');

				}

		});






		//Faire Popper des items random dans le cadre







		//Faire augmenter la taille du Snake quand l'item est pris
		let root= $(':root');
		root.css('--x','50%')









// Trigger Function
setInterval(mooving_snake,2000);
// setTimeout(mooving_snake,1000);



































// fin scripts
});
