console.log("hello world");

const form = document.querySelector("form");

form.setAttribute("novalidate", "");

form.addEventListener("submit", (e) => {
	if (!form.checkValidity()) e.preventDefault();
});

const inputs = form.querySelectorAll("input");

inputs.forEach((e) => {
	e.setAttribute("aria-invalid", false);
	e.addEventListener("input", () => {
		e.setAttribute("aria-invalid", false);
		document.getElementById(`${e.id}Error`).textContent = "";
	});
	e.addEventListener("invalid", () => {
		console.log(e.validity);

		let errorMessage;
		if (e.id === "email") {
			if (e.validity.typeMismatch) {
				errorMessage =
					"that's not an email address, throw an @ in there or some .coms at the end or something you know what an email address looks like come on";
			} else if (e.validity.valueMissing) {
				errorMessage = "ENTER YOUR EMAIL PLEASE, IT IS REQUIRED";
			} else {
				errorMessage = "there's something up with your email, sort it out";
			}
		} else if (e.id === "password") {
			if (e.validity.tooShort) {
				errorMessage = `you are missing ${
					8 - e.value.length
				} characters in that password bud`;
			} else if (e.validity.patternMismatch) {
				errorMessage = `I told you, you need a number in your password!`;
			} else if (e.validity.valueMissing) {
				errorMessage =
					"did you really think you could sign up without a password? ENTER ONE!";
			} else {
				errorMessage = "password broken, fix it";
			}
		}
		e.setAttribute("aria-invalid", true);
		document.getElementById(`${e.id}Error`).textContent = "⚠ " + errorMessage;
		console.log(e.id + " is now invalid,", e.validationMessage);
	});
});
