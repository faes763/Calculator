let input = document.querySelector('input');
input.onkeypress=function(event) {
	if (event.keyCode === 13) {
		let span = document.createElement('span');
		let img = document.createElement('img');
		let li = document.createElement('li');
		span.innerHTML = input.value;
		img.setAttribute('src','garbage.svg');
		li.appendChild(img);
		li.appendChild(span);
		document.querySelector('ul').appendChild(li);
		input.value = "";
	}
}
document.querySelector('ul').onclick=function(event) {
	let target = event.target; 
	if (target.tagName === 'LI') {
		target.classList.toggle('checked');
	}
	else if (target.tagName ==="IMG") {
		target.parentElement.remove();
	}
}
document.querySelector('.clear').onclick=function() {
	let wh = document.querySelectorAll('li').length;
	for (var i = 0; i < wh; i++) {
		let hy = document.querySelector('li');
		hy.remove();
	}
	// let ul = document.querySelector('ul');
	// ul.innerHTML= "";
}
document.querySelector('.finish').onclick=function() {
	let wh = document.querySelectorAll("li");
	for (let i = 0; i < wh.length; i++) {
    	wh[i].classList.toggle("checked");
	}
}
