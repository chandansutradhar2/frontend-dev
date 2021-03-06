function buttonClicked() {
	alert("button clicked");
}

function validateEmail() {
	let email = document.getElementById("email").value;

	if (
		email.length <= 0 ||
		!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
	) {
		console.log("invalid email");
		document.getElementById("invalid-email").style.visibility = "visible";
	} else {
		console.log("valid email");
		document.getElementById("invalid-email").style.visibility = "hidden";
	}
}

function togglePassword() {
	const togglePasswordIcon = document.getElementById("togglePassword");
	const password = document.getElementById("password");
	password.getAttribute("type") === "password"
		? password.setAttribute("type", "text")
		: password.setAttribute("type", "password");
	togglePasswordIcon.classList.toggle("bi-eye");
}

const icon = document.getElementById("togglePassword");
icon.addEventListener("click", (event) => {
	alert(event);
	console.log(event);
});

const isAdmin = true;
isAdmin ? console.log(true) : console.log(false);

if (isAdmin) {
	console.log("true");
} else {
	console.log("false");
}
