const cards = document.querySelectorAll('.item');
let isFlippedCard = true;
let firstCard,secondCard;
let lockBoard = true;
let vow = 1;
let kp = document.querySelector('input');
cards.forEach(card => {
			let randomPos = Math.floor(Math.random() * 12);
			card.style.order = randomPos;
		});
function flipCard() {
	let item = event.target.parentElement;

	if (lockBoard) return lockBoard;
	if (event.target.parentElement == firstCard) return firstCard;
	item.classList.add('flip')
	// if (firstCard == undefined) {
	// 	dom();
	// }
	if (!isFlippedCard) {
		isFlippedCard = true;
		firstCard = event.target.parentElement;
		return;
	}
	
	secondCard = event.target.parentElement;
	firstCard.dataset.educaion === secondCard.dataset.educaion? disableCards(): unFlipCards();
	let why = document.querySelectorAll('.flip');
	if(why.length === 12) {
		alert('Вы угадали!')
		setTimeout(() => {
			restart();
		},1333)
		document.querySelector('.woa').innerHTML = "От 0 до 8"
		document.getElementById('test').classList.remove('test')
	}
	
};
// let but = document.querySelector('.clock').onclick;
// document.querySelector('.clock').onclick = function() {
// 	function dom(flipCard) {
// 		secondCard.dataset.educaion === firstCard.dataset.educaion;
// }
// }
function disableCards() {
	firstCard.removeEventListener('click',flipCard)
	secondCard.removeEventListener('click',flipCard)
	resetBoard();
}	
function unFlipCards(turn) {
	lockBoard = true;
	setTimeout(()=> {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		resetBoard();
	},1000)
	char();
}
function resetBoard() {
	[isFlippedCard,lockBoard] = [false,false];
	[firstCard,secondCard] = [null,null]
}
cards.forEach(card => card.addEventListener('click',flipCard));
function restart() {
		[isFlippedCard,lockBoard] = [true,true];
		[firstCard,secondCard] = [null,null]
		let elm = document.querySelectorAll("[id='em']");
		for(let z = 0; z < elm.length; z++) {
    		elm[z].classList.remove('flip');
    	}
		cards.forEach(card => {
			let randomPos = Math.floor(Math.random() * 12);
			card.style.order = randomPos;
			card.addEventListener('click',flipCard)
		});
		
		document.querySelector('input').disabled = false;
		turn = "";
		console.log(turn);
}	

document.querySelector('input').onkeypress = function() {
	if (event.keyCode === 13 && kp.value > -1 && kp.value < 9) {
		turn = kp.value;
		turn++;
		kp.value = "";

		document.getElementById('test').classList.add('test');
		document.querySelector('.spa').innerHTML = turn;
		document.querySelector('.woa').innerHTML = "";
		document.querySelector('input').disabled = true;
		lockBoard = false;
		isFlippedCard = false;
		return char();
		cards.forEach(card => {
			let randomPos = Math.floor(Math.random() * 12);
			card.style.order = randomPos;
		});
	}
	
}
function char() {
		turn = turn -1;
		document.querySelector('span').innerHTML = turn;
		console.log(turn);
		if (turn < 0) {
			alert('Попытки заночились')
			document.querySelector('.woa').innerHTML = "От 0 до 8"
			document.getElementById('test').classList.remove('test')
			restart();
		}
}
// document.querySelector('.clock').onclick = function() {
	
// }
