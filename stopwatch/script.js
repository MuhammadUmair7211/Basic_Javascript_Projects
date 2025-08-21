let startBtn = document.querySelector("#start-btn");
let stopBtn = document.querySelector("#stop-btn");
let resetBtn = document.querySelector("#reset-btn");

let milliSeconds = document.getElementById("milli-seconds");
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
let timer;
let ms = 0;
let sec = 0;
let min = 0;
let hr = 0;

startBtn.addEventListener("click", function () {
	startBtn.setAttribute("disabled", "true");
	timer = setInterval(function () {
		ms++;
		if (ms == 100) {
			ms = 0;
			sec++;
		}
		if (sec == 60) {
			sec = 0;
			min++;
		}
		if (min == 60) {
			min = 0;
			hr++;
		}

		let misec = ms;
		if (ms < 10) {
			misec = "0" + ms;
		}
		let secnds = sec;
		if (sec < 10) {
			secnds = "0" + sec;
		}
		let mins = min;
		if (min < 10) {
			mins = "0" + min;
		}
		let hrs = hr;
		if (hr < 10) {
			hrs = "0" + hr;
		}
		milliSeconds.innerHTML = misec;
		seconds.innerHTML = secnds;
		minutes.innerHTML = mins;
		hours.innerHTML = hrs;
	}, 10);
});

stopBtn.addEventListener("click", function () {
	startBtn.removeAttribute("disabled");
	clearInterval(timer);
});

resetBtn.addEventListener("click", function () {
	clearInterval(timer);
	ms = 0;
	sec = 0;
	min = 0;
	hr = 0;
	milliSeconds.innerHTML = "00";
	seconds.innerHTML = "00";
	minutes.innerHTML = "00";
	hours.innerHTML = "00";
});
