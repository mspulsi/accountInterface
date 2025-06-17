
const form = document.getElementById("form");
const find_form = document.getElementById("find_form");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
let hasError, emailError, phoneError = false;



// below is all of the error catching event listeners for respective forms.

// This first one is catching errors in user input for the form which creates a new account.
if (form) {
    const first_name = document.getElementById("first_name");
    const last_name = document.getElementById("last_name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");
    let hasError = false;

    first_name.addEventListener("change", (e) => {
        const nameValue = e.target.value.trim();

        if (nameValue === "" || nameValue === null) {
            document.getElementById("nameError").innerText = "First and last names are required";
            isError(first_name);
            hasError = true;
        } else if (nameValue.length < 3) {
            document.getElementById("nameError").innerText = "First and last names must be at least 3 characters";
            isError(first_name);
            hasError = true;
        } else if (!/^[a-zA-Z]+$/.test(nameValue)) {
            document.getElementById("nameError").innerText = "First and last names can only have letters";
            isError(first_name);
            hasError = true;
        }
        else {
            document.getElementById("nameError").innerText = "";
            noError(first_name);
            hasError = false;
        }
    });

    last_name.addEventListener("change", (e) => {
        const nameValue = e.target.value.trim();

        if (nameValue === "" || nameValue === null) {
            document.getElementById("nameError").innerText = "First and last names are required";
            isError(last_name);
            hasError = true;
        } else if (nameValue.length < 3) {
            document.getElementById("nameError").innerText = "First and last names must be at least 3 characters";
            isError(last_name);
            hasError = true;
        } else if (!/^[a-zA-Z]+$/.test(nameValue)) {
            document.getElementById("nameError").innerText = "First and last names can only have letters";
            isError(last_name);
            hasError = true;
        } else {
            document.getElementById("nameError").innerText = "";
            noError(last_name);
            hasError = false;
        }
    });

    email.addEventListener("change", (e) => {
        const emailValue = e.target.value.trim();

        if (emailValue === "" || emailValue === null) {
            document.getElementById("emailError").innerText = "Email is required";
            isError(email);
            hasError = true;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
            document.getElementById("emailError").innerText = "Email is not valid";
            isError(email);
            hasError, emailError = true;
        } else {
            document.getElementById("emailError").innerText = "";
            noError(email);
            hasError, emailError = false;
        }
    });

    phone.addEventListener("change", (e) => {
        const phoneValue = e.target.value.trim();

        if (phoneValue === "" || phoneValue === null) {
            document.getElementById("phoneError").innerText = "Phone number is required";
            isError(phone);
            hasError = true;
        } else if (!/^\d{10}$/.test(phoneValue)) {
            document.getElementById("phoneError").innerText = "Phone number must be 10 digits";
            isError(phone);
            hasError, phoneError = true;
        } 
        else {
            document.getElementById("phoneError").innerText = "";
            noError(phone);
            hasError, phoneError = false;
        }
    });

    street.addEventListener("change", (e) => {
        const streetValue = e.target.value.trim();

        if (streetValue === "" || streetValue === null) {
            document.getElementById("streetError").innerText = "Street address is required";
            isError(street);
            hasError = true;
        } else if (streetValue.length < 5) {
            document.getElementById("streetError").innerText = "Street address must be at least 5 characters";
            isError(street);
            hasError = true;
        } else if (!/^[a-zA-Z0-9\s]+$/.test(streetValue)) {
            document.getElementById("streetError").innerText = "Street address can only have letters and numbers";
            isError(street);
            hasError = true;
        } else {
            document.getElementById("streetError").innerText = "";
            noError(street);
            hasError = false;
        }
    });

    city.addEventListener("change", (e) => {
        const cityValue = e.target.value.trim();

        if (cityValue === "" || cityValue === null) {
            document.getElementById("cityError").innerText = "City is required";
            isError(city);
            hasError = true;
        } else if (cityValue.length < 3) {
            document.getElementById("cityError").innerText = "City must be at least 3 characters";
            isError(city);
            hasError = true;
        } else if (!/^[a-zA-Z\s]+$/.test(cityValue)) {
            document.getElementById("cityError").innerText = "City can only have letters";
            isError(city);
            hasError = true;
        } else {
            document.getElementById("cityError").innerText = "";
            noError(city);
            hasError = false;
        }
    });

    state.addEventListener("change", (e) => {
        const stateValue = e.target.value;

        if (stateValue === "noState") {
            document.getElementById("stateError").innerText = "State is required";
            isError(state);
            hasError = true;
        } else {
            document.getElementById("stateError").innerText = "";
            hasError = false;
            noError(state);
            state.style.background = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\"><path fill=\"black\" d=\"M7 10l7 7 7-7z\"/></svg>') no-repeat right 10px center/18px 18px";
        }
    });

    zip.addEventListener("change", (e) => {
        const zipValue = e.target.value.trim();

        if (zipValue === "" || zipValue === null) {
            document.getElementById("zipError").innerText = "Zip code is required";
            isError(zip);
            hasError = true;
        } else if (!/^\d{5}$/.test(zipValue)) {
            document.getElementById("zipError").innerText = "Zip code must be 5 digits";
            isError(zip);
            hasError = true;
        } else {
            document.getElementById("zipError").innerText = "";
            noError(zip);
            hasError = false;
        }
    });

    // 
    // BELOW WE GOT THE ACTUALLY FORM LISTENER -
    // IT CHECKS IF THERE ARE ANY ERRORS IN THE FORM
    // BASED ON THE ABOVE INDIVIDUAL INPUT ERROR CATCHING LISTENERS
    // 

    form.addEventListener("submit", (e) => {
        if (hasError) {
            e.preventDefault();
            document.getElementById("formError").innerText = "Please fix the errors in the form before submitting.";
            return;
        } else if (
                first_name.value.trim() === "" || last_name.value.trim() === "" ||
                email.value.trim() === "" || phone.value.trim() === "" ||
                street.value.trim() === "" || city.value.trim() === "" ||
                state.value === "noState" || zip.value.trim() === ""
            ){
            e.preventDefault();
            document.getElementById("formError").innerText = "Please fill out all of the fields.";
            return;
        }   
    }
    );


}

if (find_form) {
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    let emailError, phoneError = false;

    email.addEventListener("change", (e) => {
        const emailValue = e.target.value.trim();

        if (emailValue === "") {
            document.getElementById("emailError").innerText = "";
            noError(email);
            emailError = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
            document.getElementById("emailError").innerText = "Email is not valid";
            isError(email);
            emailError = true;
        } else {
            document.getElementById("emailError").innerText = "";
            noError(email);
            emailError = false;
        }
    });

    phone.addEventListener("change", (e) => {
        const phoneValue = e.target.value.trim();

        if (phoneValue === "") {
            document.getElementById("phoneError").innerText = "";
            noError(phone);
            phoneError = false;
        } else if (!/^\d{10}$/.test(phoneValue)) {
            document.getElementById("phoneError").innerText = "Phone number must be 10 digits";
            isError(phone);
            phoneError = true;
        } else {
            document.getElementById("phoneError").innerText = "";
            noError(phone);
            phoneError = false;
        }
    });

    find_form.addEventListener("submit", (e) => {
        if (email.value.trim() === "" && phone.value.trim() === "") {
            e.preventDefault();
            document.getElementById("formError").innerText = "Please enter an email or phone.";
            return;
        } else if (phoneError || emailError){
            e.preventDefault();
            return;
        }   
    }
    );
}





// this just implements the error styles when an error is detected.

function isError(input) {
    input.style.borderBottom = "2px solid red";
    input.style.background = "url('data:image/svg+xml;utf8,<svg fill=\"red\" height=\"18\" viewBox=\"0 0 24 24\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 0 0 L 5 0 L 5 14 L 0 14 L 0 0 M 0 18 L 5 18 L 5 23 L 0 23 L 0 18\"/></svg>') no-repeat right 10px center/18px 18px";
}

function noError(input) {
    input.style.borderBottom = "2px solid black";
    input.style.background = "none";
}



// the following was an attempt to make my form data connect to my database via node.js

    // const formData = {
    //     firstName: first_name.value,
    //     lastName: last_name.value,
    //     email: email.value,
    //     phone: phone.value,
    //     street: street.value,
    //     city: city.value,
    //     state: state.value,
    //     zip: zip.value
    // };
    
    // fetch('http://localhost:3000/submit-form', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // })
    // .then(res => res.text())
    // .then(data => {
    //     if (data === 'Success') {
    //         window.location.href = "createdPage.html";
    //     } else {
    //         document.getElementById("formError").innerText = "Submission failed.";
    //     }
    // })
    // .catch(err => {
    //     document.getElementById("formError").innerText = "Server error.";
    // });
