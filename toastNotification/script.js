let showNotificationButton = document.querySelector(".show-notification");
let notificationContainer = document.querySelector(".notification-container");
let notification = document.querySelector(".notification");
showNotificationButton.addEventListener("click", () => {
	let div = document.createElement("div");
	div.classList.add("notification");
	div.innerHTML = `<div class="notification-para">
                <p>This is a notification!</p>
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
            <div class="animation-background"></div>`;
	notificationContainer.appendChild(div);
	div.style.display = "flex";
	setTimeout(() => {
		div.style.display = "none";
	}, 3000);
});
