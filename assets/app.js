const result = document.getElementById('result');
const handleClick = (num) => {
	let number = result.innerText;
	result.innerText = number + num;
};

const clean = () => {
	result.innerText = '';
};

const deleteLast = () => {
	result.innerText = result.innerText.slice(0, -1)
}

const equal = () => {
	if (!result.innerText) {
		result.innerText = 'Number first ';
		setTimeout(() => {
			result.innerText = '';
		}, 900);
	} else {
		let finalResult = result.innerText;
		result.innerText = eval(finalResult);
	}
};


// --> DarkMode

const img = document.getElementById('icon');
const calc = document.getElementById('calculator');
const buttons = Array.from(document.getElementsByClassName('button'));

img.addEventListener('click', (e) => {
	const src = img.getAttribute('src');
	if (src == '../img/dark.svg') {
		img.setAttribute('src', '../img/light.svg');

		calc.style.backgroundColor = '#EBF2FA';
		result.style.color = '#002A3C';

		buttons.forEach((e) => {
			e.style.color = '#002A3C';
		});
	} else {
		img.setAttribute('src', '../img/dark.svg');

		calc.style.backgroundColor = '#002A3C';
		result.style.color = '#EBF2FA';

		buttons.forEach((e) => {
			e.style.color = '#EBF2FA';
		});
	}
});