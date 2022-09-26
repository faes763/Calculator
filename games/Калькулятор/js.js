
document.querySelector(".buttons").onclick=function() {
	let operators = ["*","/","-","+","."];
	let target = event.target;
	let input = document.querySelector("#exprassion");
	let value = "";
	if (target.classList.contains("number")) {
			if (input.value == "0") {
				input.value = value; 
				input.value+=target.innerHTML;
			}else {
				input.value+=target.innerHTML;
			}
	}else if( target.classList.contains("operation")) {
		let expression = input.value;
		let lastChar = expression[expression.length-1];
		value = target.innerHTML;
		console.log(lastChar)
		if (operators.indexOf(lastChar) != -1) {
			expression = expression.replace(/.$/, value);
			input.value = expression;
		}else {
			input.value+=value;
		}
	}else if (target.classList.contains("calculation")){
		let expression = input.value;
		let result = eval(expression);
		input.value = result;
	}else if (target.classList.contains("clear_one")) {
		let expression = input.value;
		expression = expression.substring(0,expression.length-1);
		input.value = expression;
		if (expression.length == 0) {
			input.value = "0";
		}
	}else if (target.classList.contains("clear")) {
		input.value = "0";
	}
		
}
