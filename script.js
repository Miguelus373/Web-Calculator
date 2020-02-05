let screen = document.querySelector('#screen');

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => display.textContent = '')

let equals = document.querySelector('.equals');
equals.addEventListener('click', () =>  console.log(operate(display.textContent)));

let display = document.createElement('p');
display.classList.add('display');
display.textContent = '';
screen.appendChild(display);

let dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
	if (display.textContent.length > 0) {
		let last = display.textContent[display.textContent.length - 1];
		let array = display.textContent.split(' ');

		if (last == ' ' || last == '-') {
			display.textContent += '0.'
		} else if (array[array.length - 1].indexOf('.') == -1) {
			display.textContent += '.'
		}
	
	} else {display.textContent += '0.'}
})

let del = document.querySelector('.delete');
del.addEventListener('click', () => {
	let last = display.textContent[display.textContent.length - 1];

	if (display.textContent.length < 1 || 
		display.textContent == 'Math Error') {display.textContent = ''
	} else if (last == ' ') {
		let array = display.textContent.split(' ');
		array.splice(array.length - 2, 2);
		display.textContent = array.join(' ')
	} else {
		let array = display.textContent.split('');
		array.splice(array.length - 1, 1);
		display.textContent = array.join('')
	}
})

let substract = document.querySelector('.substract');
substract.addEventListener('click', () => {
	let last = display.textContent[display.textContent.length - 1];
	let preLast = display.textContent[display.textContent.length - 2];

	if (last == ' ') {
		if (preLast == '+') {
			let array = display.textContent.split('');
			array[array.length - 2] = '-';
			display.textContent = array.join('');
		} else if (preLast == '-') {
			let array = display.textContent.split('');
			array[array.length - 2] = '+';
			display.textContent = array.join('');
		} else {display.textContent += '-'}
	
	}else if (last == 0 || display.textContent.length < 1) {
		display.textContent = '-'
	} else if (last == '-') {
		display.textContent = ''
	} else {
		display.textContent += ' - '
	}
})

let root = document.querySelector('.root');
root.addEventListener('click', () => {
	let last = display.textContent[display.textContent.length - 1];
	let preLast = display.textContent[display.textContent.length - 2];

	if (last == ' ' && preLast != '√' || last == '-' || 
		display.textContent.length == 0) {
		display.textContent += '√ '
	} 
})

function addition(array) {
	for (let i = array.indexOf('+'); i > 0; i = array.indexOf('+')) {
	array.splice(i - 1, 3, Number(array[i - 1]) + Number(array[i + 1]));
	}
}

function substraction(array) {
	for (let i = array.indexOf('-'); i > 0; i = array.indexOf('-')) {
	array.splice(i - 1, 3, (array[i - 1] - array[i + 1]));
	}
}

function multiplication(array) {
	for (let i = array.indexOf('x'); i > 0; i = array.indexOf('x')) {
	array.splice(i - 1, 3, (array[i - 1] * array[i + 1]));
	}
}

function division(array) {
	for (let i = array.indexOf('÷'); i > 0; i = array.indexOf('÷')) {
	array.splice(i - 1, 3, (array[i - 1] / array[i + 1]));
	}
}

function powerOf(array) {
	for (let i = array.indexOf('^'); i > 0; i = array.indexOf('^')) {
		array.splice(i - 1, 3, (array[i - 1] ** array[i + 1]));
	}
}

function rootOf(array) {
	for (let i = array.indexOf('√'); i >= 0; i = array.indexOf('√')) {
		{array.splice(i, 2, ((array[i + 1] ** (1 / 2) * 1)));}
	}
	for (let i = array.indexOf('-√'); i >= 0; i = array.indexOf('-√')) {
		array.splice(i, 2, ((array[i + 1] ** (1 / 2) * -1)));
	}
}

function operate(a) {
	let array = a.split(' ');

	if (display.textContent[display.textContent.length - 1] == ' ') {
		return 'Sintax Error'
	} else {	
		rootOf(array);
		powerOf(array);
		multiplication(array);
		division(array);
		addition(array);
		substraction(array); 

		display.textContent = array[0];

		if (array[0] == Infinity || display.textContent == 'NaN') {
			display.textContent = 'Math Error'
		}
	}	
}

function numberEvents() {
	let letters = ['z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

	for (let i = 0; i < 10; i++) {
		let btn = document.querySelector('.' + letters[i]);
			btn.addEventListener('click', () => {
				display.textContent == '0' ? display.textContent = i : display.textContent += i
		})
	}
}

function opEvents(op, symbol) {
	let operator = document.querySelector('.' + op);
	operator.addEventListener('click', () => {
		let last = display.textContent[display.textContent.length - 1];
		if (display.textContent.length > 0) {
			if (last != ' ' && last != '-'){
			display.textContent += symbol}
	}
})
}

function events() {
	numberEvents();
	opEvents('add', ' + ');
	opEvents('multiply', ' x ');
	opEvents('divide', ' ÷ ');
	opEvents('power', ' ^ ')
}

console.log(events())