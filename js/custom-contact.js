let container = document.querySelector(".contact-page");
let form = document.getElementById("ContactForm");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
	e.preventDefault();

	const data = new FormData(form);
	const dataObj = Object.fromEntries(data.entries());

    let name = dataObj.name;
    let email = dataObj.email;
    let phone = dataObj.phone;
    let comments = dataObj.comments;
    let flavor = dataObj.flavor;

    let confirmationMsg = document.createElement("p");
    confirmationMsg.textContent = `Thank you ${name}! We appreciate your interest in [buying/seeking emplayment]. Your favorite coffee flavor is ${flavor}, and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`;

	console.log("our data:", dataObj);
	form.reset();
}