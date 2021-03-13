console.log('Warsztat - obsługa formularza');

const submitForm = (event) => {
    event.preventDefault();

    let firstName = document.querySelector('[name="fname"]'); // czemu query a nie get element by 
    let lastName = document.querySelector('[name="lname"]');
    console.log(`Imie : ${firstName.value}, Nazwisko: ${lastName.value}`);

}

let form = document.getElementById('form');

form.addEventListener('submit', submitForm);

console.log(form);