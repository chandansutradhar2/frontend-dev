//callbacks

setTimeout(function cb() {
	console.log("setTimeout callback invoked");
}, 4000);

console.log("print after timeout function ");

const button = document.getElementById("test");
button.addEventListener("click", function ev(input) {
	alert("button clicked");
});

console.log("after button click");
