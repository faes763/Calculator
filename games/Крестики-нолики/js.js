let char;
let turn = 0;
let list = ["","","","","","","","",""];
let comboss = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6],
];
let oPlayer = 0;
let xPlayer = 0;
document.querySelector('.content').onclick = () => {
	let element = event.target;
	turn%2 == 1? char = "O": char = "X";
	if (element.innerText ==  "" && element.className == "cell") {
		element.innerHTML = char;
		turn++;
		let node = element.parentNode;
		// console.log([...node.children].indexOf(element));
		let i = ([...node.children].indexOf(element));
		// console.log(i);
		list[i] = char;
		// console.log(turn)
		if (turn == 9) {
				alert('Ничья');
				restart();
		}
		comboss.forEach((e) => {
			// console.log(e[1])
			if (list[e[0]] === char && list[e[1]] === char && list[e[2]] === char) {
				document.querySelector('.winner').outerHTML = `<h1 class="winner">Победил <span class="sym">${char}</span></h1>`;
				if(char == "X") xPlayer+=1, document.querySelector('.xPlayer').innerHTML = xPlayer;
				if(char == "O") oPlayer+=1, document.querySelector('.oPlayer').innerHTML = oPlayer;
				restart();
			}
		})
	}

	
	
}
function restart() {
	setTimeout(() => {
		turn = 0;
		list = ["","","","","","","","",""];
		let why = document.querySelectorAll('.cell');
		for (let i = 0; i < why.length; i++) why[i].innerHTML = "";	
	}, 1500);
	
}
