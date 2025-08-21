let clockTime = document.querySelector(".time");
let intervalId = setInterval(() => {
	let dateTime =
		new Date().toDateString() +
		" " +
		"-" +
		" " +
		new Date().toLocaleTimeString();
	clockTime.innerHTML = dateTime;
}, 1000);
