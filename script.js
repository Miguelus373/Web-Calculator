let screen = document.querySelector('#screen');

function events() {
	for (let i = 0; i < 10; i++) {

			let that = change(i);
		let btn = document.querySelector('.' + that);
		btn.addEventListener('click', () => {
			display.textContent == '0' ? display.textContent = i : display.textContent += i
		})
	}
}

function change(a) {
	if (a == 1) {return 'a'}
	else if (a == 2) {return 'b'}
	else if (a == 3) {return 'c'}
	else if (a == 4) {return 'd'}
	else if (a == 5) {return 'e'}
	else if (a == 6) {return 'f'}
	else if (a == 7) {return 'g'}
	else if (a == 8) {return 'h'}
	else if (a == 9) {return 'i'}
	else { return 'z'}
}

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => display.textContent = '')

let del = document.querySelector('.delete');
del.addEventListener('click', () => {
	let last = display.textContent[display.textContent.length - 1];
	
	if (display.textContent.length < 1) {display.textContent = ''}
	else if (last == ' ') {
		let array = display.textContent.split(' ');
		array.splice(array.length - 2, 2);
		display.textContent = array.join(' ')
	
	}	else {
			let array = display.textContent.split('');
			array.splice(array.length - 1, 1);
			display.textContent = array.join('')
		}
})

let add = document.querySelector('.add');
add.addEventListener('click', () => {
	let last = display.textContent[display.textContent.length - 1];
	if (display.textContent.length > 0) {
		if (last != ' ' && last != '-'){
		display.textContent += ' + '}
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
	}

	else if (last == 0 || display.textContent.length < 1) {display.textContent = '-'}
	else if (last == '-') {display.textContent = ''}	
	else {display.textContent += ' - '}
})

let multiply = document.querySelector('.multiply');
multiply.addEventListener('click', () => {
	if (display.textContent.length > 0) {
		let last = display.textContent[display.textContent.length - 1]
		if (last != ' ' && last != '-') {
		display.textContent += ' x '}
	}
})

let divide = document.querySelector('.divide');
divide.addEventListener('click', () => {
	if (display.textContent.length > 0) {
		let last = display.textContent[display.textContent.length - 1]
		if (last != ' ' && last != '-') {
		display.textContent += ' / '}
	}
})

let dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
	if (display.textContent.length > 0) {

	let last = display.textContent[display.textContent.length - 1];
	let array = display.textContent.split(' ');

	if (last == ' ' || last == '-') {display.textContent += '0.'}
	
	else if (array[array.length - 1].indexOf('.') == -1) {display.textContent += '.'}
	
	} else {display.textContent += '0.'}

})

let equals = document.querySelector('.equals');
equals.addEventListener('click', () =>  console.log(operate(display.textContent)));

let display = document.createElement('p');
display.classList.add('display');
display.textContent = '';
screen.appendChild(display);

function addition(array) {
	for (let i = array.indexOf('+'); i > 0; i = array.indexOf('+')) {
	array.splice(i - 1, 3, Number(array[i - 1]) + Number(array[i + 1]));
	}
}

function subtraction(array) {
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
	for (let i = array.indexOf('/'); i > 0; i = array.indexOf('/')) {
	array.splice(i - 1, 3, (array[i - 1] / array[i + 1]));
	}
}
function operate(a) {
	
	let array = a.split(' ');

	if (display.textContent[display.textContent.length - 1] == ' ') {
		return 'Sintax Error'
	}

	else {	
		multiplication(array);
		division(array);
		addition(array);
		subtraction(array); 
		}

	display.textContent = array[0];
	return array[0];
	
}

console.log(events())