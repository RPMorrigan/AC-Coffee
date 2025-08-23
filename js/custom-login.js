let form = document.getElementById('loginForm');

function onFormSubmit(e) {
	e.preventDefault();

	const data = new FormData(form);
	const dataObj = Object.fromEntries(data.entries());

    let userName = dataObj.name;
    let userEmail = dataObj.email;
    let userPassword = dataObj.password;

    let welcome = document.createElement("p");
    welcome.textContent = `Welcome, ${userName}! You're logged in!`;

    let wlcm = document.querySelector(".welcome");
    wlcm.appendChild(welcome);

    console.log(dataObj);
    form.reset();
}

form.addEventListener('submit', onFormSubmit);