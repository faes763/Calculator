const cards = document.querySelectorAll('.item');
let isFlippedCard = false;
let firstCard,secondCard;
let lockBoard = false;
let wow = 0;
cards.forEach(card => {
	let randomPos = Math.floor(Math.random() * 12);
	card.style.order = randomPos;
});
function flipCard() {
	let item = event.target.parentElement;
	if (lockBoard) return lockBoard;
	if (event.target.parentElement == firstCard) return firstCard;
	item.classList.add('flip')
	if (!isFlippedCard) {
		isFlippedCard = true;
		firstCard = event.target.parentElement;
		return;
	}
	secondCard = event.target.parentElement;
	firstCard.dataset.educaion === secondCard.dataset.educaion? disableCards(): unFlipCards();
	let why = document.querySelectorAll('.flip');
	if(why.length === 12) {
		restart();
	}
};
function disableCards() {
	firstCard.removeEventListener('click',flipCard);
	secondCard.removeEventListener('click',flipCard);
	resetBoard();
}
function unFlipCards() {
	lockBoard = true;
	setTimeout(()=> {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		resetBoard();
	},1000)
	wow++;
	console.log(wow);
}
function resetBoard() {
	[isFlippedCard,lockBoard] = [false,false];
	[firstCard,secondCard] = [null,null];
}
function lol() {
		let ok = "";
		wow%2 == 1? ok = " раз": ok = " раза";
		if(wow == 0) {ok = " раз"};
		if(wow == 6) {ok = " раз"};
		if(wow == 3) {ok = " раза"};
		alert('Вы ошиблись '+ wow + ok);
}
cards.forEach(card => card.addEventListener('click',flipCard));
function restart() {
	lol();
		[isFlippedCard,lockBoard] = [false,false];
		[firstCard,secondCard] = [null,null];
		let elm = document.querySelectorAll("[id='em']");
		for(let z = 0; z < elm.length; z++) {
    		elm[z].classList.remove('flip');
    	}
		cards.forEach(card => {
			let randomPos = Math.floor(Math.random() * 12);
			card.style.order = randomPos;
			card.addEventListener('click',flipCard);
		});
		wow = 0;
}
