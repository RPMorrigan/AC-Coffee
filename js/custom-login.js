let form = document.getElementById('contactForm');
let button = document.getElementById('button');

function onFormSubmit(e) {
	e.preventDefault();

	const data = new FormData(form);
	const dataObj = Object.fromEntries(data.entries());

    let userName = dataObj['name'];
    let userEmail = dataObj['email'];
    let userPwd = dataObj['password'];

    let usrNm = dataObj.name;
    let usrEm = dataObj.email;
    let usrPwd = dataObj.password;

    let welcome = createElement("p");
    welcome.textContent = `Welcome, ${usrNm}! You're logged in!`;

    let wlcm = document.querySelector(".welcome");
    wlcm.appendChild(welcome);

    console.log(welcome);
    form.reset();
}

form.addEventListener('submit', onFormSubmit);