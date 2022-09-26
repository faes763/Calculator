const width = 480, height = 360;
let draw = SVG().addTo('#game').size(width,height);
let background = draw.image('img/desert.png').size(width,height);
let dino = draw.image('img/d1.png').size(84,67).move(0,183);
let cactus = draw.image('img/cactus2.png').size(50,62).move(400,188);
let score = 0;
let text = draw.text(score).move(440,25).font({size:40}).fill('white');

let changeY = 0;
let isJump = false;
function update() {
	// cactus.x(width);
	let collision = dino.width() + dino.x() > cactus.x() && dino.height() + dino.y() > cactus.y() && dino.x() < cactus.x() + cactus.width();
	if (isJump == true) {
		dino.dy(changeY);
		changeY = changeY + 1;
		if (dino.y() >= 183) isJump = false;
	}
	if (collision) {
		dino.move(0,183)
		score = 0;
		background.load('img/desertGO.png');	
		clearInterval(ok)
		score = 0;
		cactus.x(width);
		setTimeout(()=>{
			document.querySelector('button').style.display = 'block'
		},1500)
	}
	cactus.dx(-4.4)
	if (cactus.x() <= 0) {
		cactus.x(width)
		score++;
	}
	if (score >= 10) {
		cactus.dx(-3)
	}
	document.querySelector('text').innerHTML = score;
}

document.querySelector('button').onclick = function() {	
	ok = setInterval(update, 10);
	background.load('img/desert.png');	
	document.querySelector('button').style.display = 'none'
}
setInterval(update, 54125125);
function animation() {
	if (dino.node.href.baseVal== 'img/d1.png') { 
		dino.load('img/d2.png');
	}
	if (dino.node.href.baseVal == 'img/d2.png') {
		dino.load('img/d3.png');
	}
	else dino.load('img/d1.png');
}
setInterval(animation, 150);

document.addEventListener('keydown',function(event) {
	if (event.keyCode == 32 && isJump == false) {
		changeY = -16;
		isJump = true;
	}
});