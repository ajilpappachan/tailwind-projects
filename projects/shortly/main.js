import "./style.css";

const linkForm = document.getElementById("link-form");
const linkInput = document.getElementById("link-input");
const errorMsg = document.getElementById("error-msg");

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const validURL = (str) => {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?" +
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
			"((\\d{1,3}\\.){3}\\d{1,3}))" +
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
			"(\\?[;&a-z\\d%_.~+=-]*)?" +
			"(\\#[-a-z\\d_]*)?$",
		"i"
	);
	return !!pattern.test(str);
};

const formSubmit = (event) => {
	event.preventDefault();
	if (linkInput.value === "") {
		errorMsg.innerHTML = "Please enter something!";
		linkInput.classList.add("border-red");
	} else if (!validURL(linkInput.value)) {
		errorMsg.innerHTML = "Please enter a valid URL!";
		linkInput.classList.add("border-red");
	} else {
		errorMsg.innerHTML = "";
		linkInput.classList.remove("border-red");
		alert("Success");
	}
};

const navToggle = () => {
	menuBtn.classList.toggle("open");
	menu.classList.toggle("flex");
	menu.classList.toggle("hidden");
};

linkForm.addEventListener("submit", formSubmit);
menuBtn.addEventListener("click", navToggle);
