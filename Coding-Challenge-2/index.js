let field = document.querySelector("#email");
let check = document.querySelector(".tick");


function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return (true)
	}
	return (false)
}

field.addEventListener('keyup', updateValue);


function updateValue(e) {

	if (ValidateEmail(e.target.value)) {
		console.log('added');
		check.classList.add('visible');
		field.classList.add('field-visible');
	} else if (!ValidateEmail(e.target.value)) {
		console.log('removed');
		check.classList.remove('visible');
		field.classList.remove('field-visible');
	}

}
