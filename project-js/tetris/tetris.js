// тетрис
// контейнер для тетриса
// сетка
// ключ для каждой ечейки как координата х у
// фигуры квадрат, палка , буква Г *2, , буква Т, ~*2, 1,
// меню 
// 3 уровня сложность + 1 уровень на повышение  
 

// управление, ключи по кнопкам 
// условие если собрал всю линию + 10 очков          a
// 
// счетчик очков, лучший счет 
//  если вышел за контейнер - проиграл + сообщение ваш счет 
// начать сначала 
// сбросить счет
// вернуться в меню 

//создам див с классом 
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let speed = 0;
level = 0;
let inputLevel = document.getElementsByTagName('input')[1];
inputLevel.value = `Уровень сложности: ${level}`;

modal.addEventListener('click', function (e){
	if(e.target.classList.contains('easy')){
		speed = 1000;
	} 
	else if(e.target.classList.contains('normal')){
		speed = 500;
	} 
	else if (e.target.classList.contains('hard')) {
		speed = 300;
	} 
	else if (e.target.classList.contains('groving')){
		speed = 1000;
		// выполни функцию которая каждые 100 очков будет уменьшать speed на 100, до 1000 
		// выводить уровень сложности с каждым уменьшением скорости на ++
		
	}
	if(e.target.classList.contains('button')){
		// присвоить название кнопки по которому был клик 
		level = e.target.innerHTML;
		inputLevel.value = `Уровень сложности: ${level}`;
		modal.style.display =  'none';
		overlay.style.display =  'none';
		startGame();
	}
});


function startGame(){
let tetris = document.createElement('div');
tetris.classList.add('tetris');

// создам сетку на 180 ячеек
for (let i=1; i<181; i++){
	let cell = document.createElement('div');
	cell.classList.add('cell');
	tetris.appendChild(cell);
}


// обращусь к первому классу майн 
let main = document.getElementsByClassName('main')[0];
main.appendChild(tetris);

// запишутся все ячейки все 180 
let i = 0;
let cell = document.getElementsByClassName('cell'); 

// присваиваю каждой ечейке ключ 
// иду циклом в обратном направлении 

for (let y=18; y>0; y--) {
	for (let x=1; x<11; x++){
		cell[i].setAttribute('posX', x);
		cell[i].setAttribute('posY', y);
		i++
	}
}

// по уникальному значению отрисую массивом фигуры начиная с х=1 у=1

let x = 5, y =15; //координата для первой клетке фигуры
let mainArr = [
	// точка
	[
		[0,0],
		[0,0],
		[0,0],
	],
	// палка*2
	[
		[0,1],
		[0,0],
		[0,0],
		// поворот на 90гр
		[
			[0, 0],
			[-1, -1],
			[0, 0],
			[0, 0],
		],
		// поворот на 180гр
		[
			[0, 0],
			[1, -1],
			[0, 0],
			[0, 0],
		],
		// поворот на 270гр
		[
			[0, 0],
			[1, 1],
			[0, 0],
			[0, 0],
		],
		// поворот на 360гр
		[
			[0, 0],
			[-1, 1],
			[0, 0],
			[0, 0],
		],
	],
	// палка*4
	[
		[0,1],
		[0,2],
		[0,3],
		// поворот на 90гр
		[
			[-1, 1],
			[0, 0],
			[1, -1],
			[2, -2],
		],
		// поворот на 180гр
		[
			[1, -1],
			[0, 0],
			[-1, 1],
			[-2, 2],
		],
		// поворот на 270гр
		[
			[-1, 1],
			[0, 0],
			[1, -1],
			[2, -2],
		],
		// поворот на 360гр
		[
			[1, -1],
			[0, 0],
			[-1, 1],
			[-2, 2],
		],
	],

	//квадрат
	[
		[1,0],
		[0,1],
		[1,1],
			// поворот на 90гр
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		],
		// поворот на 180гр
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		],
		// поворот на 270гр
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		],
		// поворот на 360гр
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		],
	],

	// буква |_
	[
		[1,0],
		[0,1],
		[0,2],
		// поворот на 90гр
		[
			[0, 0],
			[-1, 1],
			[1, 0],
			[2, -1],
		],
		// поворот на 180гр
		[
			[1, -1],
			[1, -1],
			[-1, 0],
			[-1, 0],
		],
		// поворот на 270гр
		[
			[-1, 0],
			[0, -1],
			[2, -2],
			[1, -1],
		],
		// поворот на 360гр
		[
			[0, -1],
			[0, -1],
			[-2, 0],
			[-2, 0],
		],
	],
	// буква _| в другую сторону 
	[
		[1,0],
		[1,1],
		[1,2],
		// поворот на 90гр
		[
			
			[0, 0],
			[0, 0],
			[1, -1],
			[-1, -1],
		],
		// поворот на 180гр
		[
			[0, -1],
			[-1, 0],
			[-2, 1],
			[1, 0],
		],
		// поворот на 270гр
		[
			[2, 0],
			[0, 0],
			[1, -1],
			[1, -1],
		],
		// поворот на 360гр
		[
			[-2, 0],
			[1, -1],
			[0, 0],
			[-1, 1],
		],

	],
	// буква Т 
	[
		[1,0],
		[2,0],
		[1,1],

		// поворот на 90гр
		[
			[1, -1],
			[0, 0],
			[0, 0],
			[0, 0],
		],
		// поворот на 180гр
		[
			[0, 0],
			[-1, 0],
			[-1, 0],
			[1, -1],
		],
		// поворот на 270гр
		[
			[1, -1],
			[1, -1],
			[1, -1],
			[0, 0],
		],
		// поворот на 360гр
		[
			[-2, 0],
			[0, -1],
			[0, -1],
			[-1, -1],
		],

	],
	// буква молния вправо-i_
	[
		[1,0],
		[-1,1],
		[0,1],

		// поворот на 90гр
		[
			[0, -1],
			[-1, 0],
			[2, -1],
			[1, 0],
		],
		// поворот на 180гр
		[
			[0, 0],
			[1, -1],
			[-2, 0],
			[-1, -1],
		],
		// поворот на 270гр
		[
			[0, -1],
			[-1, 0],
			[2, -1],
			[1, 0],
		],
		// поворот на 360гр
		[
			[0, 0],
			[1, -1],
			[-2, 0],
			[-1, -1],
		],

	],
	// буква молния влево
	[
		[1,0],
		[1,1],
		[2, 1],

		// поворот на 90гр
		[
			[2, -1],
			[0, 0],
			[1, -1],
			[-1, 0],
		],
		// поворот на 180гр
		[
			[-2, 0],
			[0, -1],
			[-1, 0],
			[1, -1],
		],
		// поворот на 270гр
		[
			[2, -1],
			[0, 0],
			[1, -1],
			[-1, 0],
		],
		// поворот на 360гр
		[
			[-2, 0],
			[0, -1],
			[-1, 0],
			[1, -1],
		],
	],
	
	
]
 
 let currentFigure = 0;
 let figureBudy = 0;
 let rotate = 1;

// создам функцию которая
function create() {
	// возвращает рандомно значение массива mainArr
	function getRandom(){
		return Math.round(Math.random() * (mainArr.length-1))
	}
	rotate = 1;
	//определяю значение массива 
	currentFigure = getRandom();

	// определяю тело фигуры 
	figureBudy = [
		document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`),
	];
	for (let i=0; i<figureBudy.length; i++) {
		figureBudy[i].classList.add('figure');
	}
}
create();

let score = 0;
let input = document.getElementsByTagName('input')[0];

input.value = `Ваши очки: ${score}`;

function move() {
	let moveFlag = true;
	let coordinates = [
		[figureBudy[0].getAttribute('posX'), figureBudy[0].getAttribute('posY')],
		[figureBudy[1].getAttribute('posX'), figureBudy[1].getAttribute('posY')],
		[figureBudy[2].getAttribute('posX'), figureBudy[2].getAttribute('posY')],
		[figureBudy[3].getAttribute('posX'), figureBudy[3].getAttribute('posY')],
	];

	for(let i=0; i< coordinates.length; i++){
		if(coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1] - 1 }"]`).classList.contains('set')) {
			moveFlag = false;
			break;
		}
	}

	if(moveFlag){
		for (let i=0; i<figureBudy.length; i++) {
		figureBudy[i].classList.remove('figure');
		}
		figureBudy = [
			document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1] -1}"]`),
			document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1] -1}"]`),
			document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1] -1}"]`),
			document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1] -1}"]`),
		]
		for (let i=0; i<figureBudy.length; i++) {
		figureBudy[i].classList.add('figure');
		}
	} else {
		for (let i=0; i<figureBudy.length; i++) {
			figureBudy[i].classList.remove('figure');
			figureBudy[i].classList.add('set');
		}
		for(let i=1; i<15; i++) {
			let count = 0;
			for (let k=1; k<11; k++) {
				if(document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')){
					count++;
					if(count == 10 ) {
						score += 10;
						input.value = `Ваши очки: ${score}`;
						for(let m =1; m<11; m++) {
							document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set')
						}

						let set = document.querySelectorAll('.set');
						let newSet =[];

						for(let s=0; s<set.length; s++) {

							let setCoordinates = [set[s].getAttribute('posX'), set[s].getAttribute('posY')];

							if (setCoordinates[1] > i) {
								set[s].classList.remove('set');
								newSet.push(document.querySelector(`[posX = "${setCoordinates[0]}"][posY = "${setCoordinates[1]-1}"]`));
							}
						}

						for (let a=0; a<newSet.length; a++) {
							newSet[a].classList.add('set');
						}
						i--;
					}
				}
			}
		}
		for(n=1; n<11; n++){
			if(document.querySelector(`[posX = "${n}"][posY = "15"]`).classList.contains('set')){
				clearInterval(interval);
				alert(`Игра окончена Ваши очки: ${score}`);
				break;
			}
		}
		create()
	}
}

let interval = setInterval(() => {
	move();
}, speed);

let flag = true;


window.addEventListener('keydown', function (e) {
	let coordinates1 = [figureBudy[0].getAttribute('posX'), figureBudy[0].getAttribute('posY')];
	let coordinates2 = [figureBudy[1].getAttribute('posX'), figureBudy[1].getAttribute('posY')];

	let coordinates3 = [figureBudy[2].getAttribute('posX'), figureBudy[2].getAttribute('posY')];

	let coordinates4 = [figureBudy[3].getAttribute('posX'), figureBudy[3].getAttribute('posY')];

	function getNewState(a){

		flag = true;

		let figureNew = [
			document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1] }"]`),
			document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1] }"]`),
			document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1] }"]`),
			document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1] }"]`),
		];

		for(let i=0; i<figureNew.length; i++){
			if(!figureNew[i] || figureNew[i].classList.contains('set')) {
				flag = false;
			}
		}

		if (flag == true) {
			for (let i=0; i<figureBudy.length; i++) {
				figureBudy[i].classList.remove('figure');
			}

			figureBudy = figureNew;

			for (let i=0; i<figureBudy.length; i++) {
			figureBudy[i].classList.add('figure');
			}
		}
	}
	if(e.keyCode == 37) {
		getNewState(-1);
	} 
	else if(e.keyCode == 39) {
		getNewState(1);
	} 
	else if(e.keyCode == 40) {
		move();
	}
	else if(e.keyCode == 38) {
		
		flag = true;

		let figureNew = [
			document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentFigure][rotate+2][0][0]}"][posY = "${+coordinates1[1] + mainArr[currentFigure][rotate+2][0][1] }"]`),
			document.querySelector(`[posX = "${+coordinates2[0] + mainArr[currentFigure][rotate+2][1][0]}"][posY = "${+coordinates2[1] + mainArr[currentFigure][rotate+2][1][1]}"]`),
			document.querySelector(`[posX = "${+coordinates3[0] + mainArr[currentFigure][rotate+2][2][0]}"][posY = "${+coordinates3[1] + mainArr[currentFigure][rotate+2][2][1] }"]`),
			document.querySelector(`[posX = "${+coordinates4[0] + mainArr[currentFigure][rotate+2][3][0]}"][posY = "${+coordinates4[1] + mainArr[currentFigure][rotate+2][3][1] }"]`),
		];

		for(let i=0; i<figureNew.length; i++){
			if(!figureNew[i] || figureNew[i].classList.contains('set')) {
				flag = false;
			}
		}

		if (flag == true) {
			for (let i=0; i<figureBudy.length; i++) {
				figureBudy[i].classList.remove('figure');
			}

			figureBudy = figureNew;

			for (let i=0; i<figureBudy.length; i++) {
			figureBudy[i].classList.add('figure');
			}

			if(rotate < 4 ) {
				rotate++
			} else {
				rotate = 1;
			}
		} 
	}
})
}
