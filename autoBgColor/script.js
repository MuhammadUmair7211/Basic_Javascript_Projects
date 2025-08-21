let para = document.querySelector(".para");
function changeBgColor() {
	let code = "#";
	let numbers = "0123456789ABCDEF";
	let colorCode = "";
	for (let i = 0; i < 6; i++) {
		colorCode += numbers[Math.floor(Math.random() * 16)];
		document.body.style.backgroundColor = code + colorCode;
		para.innerHTML = code + colorCode;
	}
}

setInterval(() => {
	changeBgColor();
}, 2000);
