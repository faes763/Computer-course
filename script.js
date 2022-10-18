const tomorrow = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() +1);
let sell = getRandomInt(2517,4325);
function text() {
	let left = tomorrow - new Date();
	let days = left > 0 ? Math.floor(left/1000/60/60/24) : 0;
	let hours = left > 0 ? Math.floor(left/1000/60/60) : 0;
	let minutes = left > 0 ? Math.floor(left/1000/60)%60 : 0;
	let seconds = left > 0 ? Math.floor(left/1000)%60 : 0;
	document.querySelector('.days').innerHTML = days.toString();
	document.querySelector('.hours').innerHTML = hours.toString();
	document.querySelector('.minute').innerHTML = minutes.toString();
	document.querySelector('.seconds').innerHTML = seconds.toString();
	let profit = document.querySelector('progress').value;
	if (profit <= 299) {
		document.querySelector('progress').value++;
		sell+=getRandomInt(2500,4325);
	}
	document.querySelector('.profit').innerHTML = sell;
}
setInterval(text, 1000);

function getRandomInt(min,max) {
	return Math.floor(Math.random()*(max-min + 1))+min;
}