// змейка
// контейнер для змейки
// сетка
// ключ для каждой ечейки как координата х у
// сама змея
// управление змейкой
// если змея вошла в стену то выходит из противополжной стороны 
// рандомная точка
// если змея попала на точку удали точку добавь в конец ей новую точку и сгенерурую новую точку
// если змея врезалась в саму себя то игра окончена 
// считай очки   

let snake = document.createElement('div');
snake.classList.add('snake');

for(let i=1; i<145; i++){
	let cell = document.createElement('div');
	cell.classList.add('cell');
	snake.appendChild(cell);
}

let main = document.getElementsByClassName('main')[0];
main.appendChild(snake);

let i = 0;
let cell = document.getElementsByClassName('cell');

for(let y=11; y>=0; y--){
	for(let x=0; x<12; x++){
		cell[i].setAttribute('posX', x);
		cell[i].setAttribute('posY', y);
		i++
	}
}

let x = 1; y = 10;
let mainArr = [
// snake
	[
		[1,0],
		[2,0],
		[3,0],
	],
]
function getRandom(x,y){
	return Math.round(x + Math.random() * (y-x))
}

function createSnake() {
	// возвращает рандомно значение массива mainArr
	
	// rotate = 1;
	// //определяю значение массива 
	// currentFigure = getRandom();

	// определяю тело фигуры 
	figureBudySnake = [
		document.querySelector(`[posX = "${getRandom(x,y)}"][posY = "${getRandom(x,y)}"]`),
	];
	for (let i=0; i<figureBudySnake.length; i++) {
		figureBudySnake[i].classList.add('figureSnake');
	}
}


function createMouse(){
	
	figureBudy = [
		document.querySelector(`[posX = "${getRandom(x,y)}"][posY = "${getRandom(x,y)}"]`),
	];
	
	for (let i=0; i<figureBudy.length; i++) {
		figureBudy[i].classList.add('figureMouse');
	}
}



function create(){
	createMouse();
	createSnake();
	
	let coordinates = [
		[figureBudySnake[0].getAttribute('posX'), figureBudySnake[0].getAttribute('posY')],
	];
	
	let coordinates2 = [
		[figureBudy[0].getAttribute('posX'), figureBudy[0].getAttribute('posY')],
	];

	if(coordinates[0][0] == coordinates2[0][0] && coordinates[0][1] == coordinates2[0][1] ){
		alert('равны');
		
		create();
	}
	else {
		console.log('неравны');
		
	}
	
}
create();
let direction = 'left';

function move() {

	
	let coordinates = [
		[figureBudySnake[0].getAttribute('posX'), figureBudySnake[0].getAttribute('posY')],
	];
	let coordinates2 = [
		[figureBudy[0].getAttribute('posX'), figureBudy[0].getAttribute('posY')],
	];

	if(direction == 'left'){
		for (let i=0; i<figureBudySnake.length; i++) {
		figureBudySnake[i].classList.remove('figureSnake');
		}
		if(coordinates[0][0] > 0 && coordinates[0][0] < 11 && coordinates[0][1] > 0 && coordinates[0][1] < 11) {
			figureBudySnake = [
				document.querySelector(`[posX = "${coordinates[0][0] - 1}"][posY = "${coordinates[0][1] }"]`),
			]
		}
		else if (coordinates[0][0] == 0 ) {
			figureBudySnake = [
				document.querySelector(`[posX = "10"][posY = "${coordinates[0][1] }"]`),
			]
		}
		else if (coordinates[0][0] == 11 ) {
			figureBudySnake = [
				document.querySelector(`[posX = "1"][posY = "${coordinates[0][1] }"]`),
			]
		}
		else if (coordinates[0][1] == 0 ) {
			figureBudySnake = [
				document.querySelector(`[posX = "${coordinates[0][0] }"][posY = "10"]`),
			]
		}
		else if (coordinates[0][1] == 11 ) {
			figureBudySnake = [
				document.querySelector(`[posX = "${coordinates[0][0] }"][posY = "1"]`),
			]
		}
		for (let i=0; i<figureBudySnake.length; i++) {
		figureBudySnake[i].classList.add('figureSnake');
		}
	}
	function replaceMouse (){
		if(coordinates[0][0] == coordinates2[0][0] && coordinates[0][1] == coordinates2[0][1] ){
			alert('съел мышь давай новую');
			for (let i=0; i<figureBudy.length; i++) {
				figureBudy[i].classList.remove('figureMouse');
			}
			createMouse();
		}
		
	} 
	replaceMouse ();
}

let interval = setInterval(() => {
	move();
}, 1000);
// функция выполняется всегда! это плохо нужно исправить 
let flag = true;


window.addEventListener('keydown', function (e) {
	let coordinates1 = [figureBudySnake[0].getAttribute('posX'), figureBudySnake[0].getAttribute('posY')];

	function getNewState(a, b){

		flag = true;

		let figureNew = [
			document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${+coordinates1[1]+b }"]`),
		];

	

		if (flag == true) {
			for (let i=0; i<figureBudySnake.length; i++) {
				figureBudySnake[i].classList.remove('figureSnake');
			}

			figureBudySnake = figureNew;

			for (let i=0; i<figureBudySnake.length; i++) {
			figureBudySnake[i].classList.add('figureSnake');
			}
		}
	}
	if(e.keyCode == 37) {
		getNewState(-1, 0);
		move();
	} 
	else if(e.keyCode == 39) {
		getNewState(1 ,0);
		move();
	} 
	else if(e.keyCode == 40) {
		getNewState(0 , -1);
		move();
	}
	else if(e.keyCode == 38) {
		getNewState(0 , 1);
		move();
		
	}
})


