$(document).ready(function(){

// Functions
function mooving_snake(){
		// console.log('je bouge !');
		// console.warn('More mooving');
}

 // Objets du DOM & Carac
const snake = $('#snake');
let items_pop =  $('.items_pop');

let snake_width = snake.css('width');
console.log(snake_width);


		// JS Way
		// let root = document.documentElement;
		// root.style.setProperty('--x','100%');


// Borner le déplacement
	const area = $('#area');
	let  area_top = area.offset().top;
	let area_left = area.offset().left;
			 console.log('top = ' + area_top + '// left = ' + area_left);


		//Déclencher event au clavier
		$(document).on('keydown',function(e){

				let the_key = e.which;
					// attention on récupère un int et pas une 'string-int'

				//les datas get en css sont des string, conversion obligée
				var posX = parseInt(snake.css('--x'),10);
				var posY = parseInt(snake.css('--y'),10);


				// tester ajout de position de pas fixe
					var new_pos = 20;

// Tester les cas d'appuis clavier
				switch(the_key){

						case 37:
						posX = posX - new_pos;
						console.log("Nouvelle position : " + posX);
						snake.css('--x',posX).toggleClass('to-left');
						break;

						case 38:
						posY = posY - new_pos;
						console.log("Nouvelle position : " + posY);
						snake.css('--y',posY).toggleClass('to-up');
						break;

						case 39:
						posX = posX + new_pos;
						console.log("Nouvelle position : " + posX);
						snake.css('--x',posX).toggleCLass('to-right');
						break;

						case 40:
						posY = posY + new_pos;
						console.log("Nouvelle position : " + posY);
						snake.css('--y',posY).toggleClass('to-bottom');
						break;

						case 8:
						$('body').append("<div class='debeug'>hello</div>");
						break;

						default:
						console.warn('press the direction key mother fucker !');

				}


// Borner le cadre de jeux
				items_pop.toggleClass('to-eat');

				if ( posY > area_top || posX > area_left ){
					// snake.fadeOut(800);
					console.warn('The Snake was a Pimp');
				} else {

				}

	// Si Snake touche un item
				items_pop.each(function(){

					var items_posY = $(this).offset().top;
					var items_posX = $(this).offset().left;

					console.log(items_posY + ' // ' + items_posX);

							if (posY === items_posY || posX === items_posX){
									$(this).remove();
									snake.css('width',)
						}

			});

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
