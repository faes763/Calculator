let secretNumber = getRandomInt(1,10);
let attempts = 3;
console.log(secretNumber)
document.querySelector('span').innerHTML = attempts;
function getRandomInt(min,max) {
	return Math.floor(Math.random () *(max-min+1))+min;
}
document.querySelector('.main-content').onclick=function() {
	let target = event.target;
	if (target.classList.contains('number')) {
		let userNumber = target.innerHTML;
		check(userNumber);
		attempts = attempts -1;
		document.querySelector('span').innerHTML = attempts;
		if (attempts == 0) {
			document.querySelector('.hints').innerHTML = "Попытки закончились.";
		}
		if (attempts < 0) {
			newGame();
		}
	}
}
function check(userNumber, attempts) {
		if (userNumber == secretNumber) {
			document.querySelector('.hints').innerHTML = "Вы угадали, нажмите на кнопку Новая игра.";
		}
		if (userNumber > secretNumber) {
			document.querySelector('.hints').innerHTML = "Число меньше.";
		}
		if (userNumber < secretNumber) {
			document.querySelector('.hints').innerHTML = "Число больше.";
		}
}
document.querySelector('.newGame').onclick=function() {
	newGame();
}
function newGame() {
	secretNumber = getRandomInt(1,10);
	attempts = 3;
	document.querySelector("span").innerHTML=attempts;
	document.querySelector('.hints').innerHTML = "О! Угадал! Ещё?";
}
