
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');
let winner = false;
let score = 100;
document.querySelector('.score').innerHTML = score;
let bet = 0;
document.querySelector('.bet').innerHTML = bet;
let withCar = "";



let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
plus.onclick = () => {
	if (bet>=score) {
	 plus.disabled = true;
	}else {
	 minus.disabled = false;
	 bet +=10;
	 document.querySelector('.bet').innerHTML = bet;
	}
}
minus.onclick = () => {
	if (bet <= 0) {
		minus.disabled = true;
		console.log(bet)
	}
	else {
		plus.disabled = false;
		bet -=10;
		document.querySelector('.bet').innerHTML = bet;
	}
}
let properlyWinner = (color)=> {
	winner = false;
	speedCar(car1, "white");
	speedCar(car2, "black");
	withCar = color;
	score-= bet;
	document.querySelector('.score').innerHTML = score;
}
let speedCar = (car, color)=> {
	let margin = 0;
	let interval = setInterval(()=>{
		let speed = Math.random()*0.1;
		console.log(speed)
		margin = margin + speed;
		car.style.marginLeft = margin + "%";
		if (margin > 100) {
			winner = true;
			if (withCar == color) {
				score+= bet*2;
				document.querySelector('.bet').innerHTML = bet;
				document.querySelector('.score').innerHTML = score;
				alert("You Winner!")
			}
			else {
				document.querySelector('.score').innerHTML = score;
				alert("You Lose!")
			}
		}
		if (winner == true) {
			clearInterval(interval);
		}
}, 5);
}
// let af = properlyWinner();

// let a = "53";
// let b = "51";

// function abv() {
// 	let v = a+b;
// 	console.log(v)
// 	return v;

// }

// abv()
// const abfv = function() {
// 	let v = a+b;
// 	console.log(v)
// 	return v;
// }
// abfv();
// const avfa = ()=> {
// 	let v = a+b;
// 	console.log(v)
// 	return v;
// }
// avfa();
// let g = avfa();
// console.log(g);