
const new_account_form = document.getElementById("new_account_form");
const login_form = document.getElementById("login_form");
const edit_form = document.getElementById("edit_form");
let hasError, emailError, phoneError = false;



// below is all of the error catching event listeners for respective forms.

// This first one is catching errors in user input for the form which creates a new account.
if (new_account_form) {
    const first_name = document.getElementById("first_name");
    const last_name = document.getElementById("last_name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    let hasError = false;

    togglePassword.addEventListener("click", () => {
        const type = password.type === "password" ? "text" : "password";
        password.type = type;
    });

    first_name.addEventListener("change", (e) => {
        const nameValue = e.target.value.trim();

        if (nameValue === "" || nameValue === null) {
            document.getElementById("first_nameError").innerText = "";
            noError(first_name);
            hasError = false;
        } else if (nameValue.length < 2) {
            document.getElementById("first_nameError").innerText = "First name is invalid";
            isError(first_name);
            hasError = true;
        } else if (!/^[a-zA-Z]+$/.test(nameValue)) {
            document.getElementById("first_nameError").innerText = "First name is invalid";
            isError(first_name);
            hasError = true;
        } else {
            document.getElementById("first_nameError").innerText = "";
            noError(first_name);
            hasError = false;
        }
        
    });

    last_name.addEventListener("change", (e) => {
        const nameValue = e.target.value.trim();

        if (nameValue === "" || nameValue === null) {
            document.getElementById("last_nameError").innerText = "";
            noError(last_name);
            hasError = false;
        } else if (nameValue.length < 2) {
            document.getElementById("last_nameError").innerText = "Last name is invalid";
            isError(last_name);
            hasError = true;
        } else if (!/^[a-zA-Z]+$/.test(nameValue)) {
            document.getElementById("last_nameError").innerText = "Last name is invalid";
            isError(last_name);
            hasError = true;
        } else {
            document.getElementById("last_nameError").innerText = "";
            noError(last_name);
            hasError = false;
        }
    });

    email.addEventListener("change", (e) => {
        const emailValue = e.target.value.trim();

        if (emailValue === "" || emailValue === null) {
            document.getElementById("emailError").innerText = "";
            noError(email);
            hasError = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
            document.getElementById("emailError").innerText = "Email is invalid";
            isError(email);
            hasError = true;
        } else {
            document.getElementById("emailError").innerText = "";
            noError(email);
            hasError = false;
        }
    });

    phone.addEventListener("change", (e) => {
        const phoneValue = e.target.value.trim();

        if (phoneValue === "" || phoneValue === null) {
            document.getElementById("phoneError").innerText = "";
            noError(phone);
            hasError = false;
        } else if (!/^\d{10}$/.test(phoneValue)) {
            document.getElementById("phoneError").innerText = "Phone number must be 10 digits";
            isError(phone);
            hasError = true;
        } else {
            document.getElementById("phoneError").innerText = "";
            noError(phone);
            hasError = false;
        } 
    });

    street.addEventListener("change", (e) => {
        const streetValue = e.target.value.trim();

        if (streetValue === "" || streetValue === null) {
            document.getElementById("streetError").innerText = "";
            noError(street);
            hasError = false;
        } else if (streetValue.length < 5) {
            document.getElementById("streetError").innerText = "Street address must be at least 5 characters";
            isError(street);
            hasError = true;
        } else if (!/^[a-zA-Z0-9\s]+$/.test(streetValue)) {
            document.getElementById("streetError").innerText = "Street address is invalid";
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
            document.getElementById("cityError").innerText = "";
            noError(city);
            hasError = false;
        } else if (cityValue.length < 3) {
            document.getElementById("cityError").innerText = "City is invalid";
            isError(city);
            hasError = true;
        } else if (!/^[a-zA-Z\s]+$/.test(cityValue)) {
            document.getElementById("cityError").innerText = "City is invalid";
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
            document.getElementById("zipError").innerText = "";
            noError(zip);
            hasError = false;
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

    password.addEventListener("change", (e) => { 
        const passwordValue = e.target.value.trim();

        if (passwordValue === "" || passwordValue === null) {
            document.getElementById("passwordError").innerText = "";
            noError(password);
            hasError = false;
        } else if (passwordValue.length < 8) {
            document.getElementById("passwordError").innerText = "Password must be at least 8 characters";
            isError(password);
            hasError = true;
        } else if (!/[A-Z]/.test(passwordValue) || !/[a-z]/.test(passwordValue) || !/\d/.test(passwordValue)) {
            document.getElementById("passwordError").innerText = "Password must have one uppercase letter, one lowercase letter, and one number";
            isError(password);
            hasError = true;
        } else {
            document.getElementById("passwordError").innerText = "";
            noError(password);
            hasError = false;
        }
    });
    // 
    // BELOW WE GOT THE ACTUALLY FORM LISTENER -
    // IT CHECKS IF THERE ARE ANY ERRORS IN THE FORM
    // BASED ON THE ABOVE INDIVIDUAL INPUT ERROR CATCHING LISTENERS
    // 

    new_account_form.addEventListener("submit", (e) => {
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
            if (first_name.value.trim() === "" || last_name.value.trim() === "") {
                isError(first_name);
                isError(last_name);
            }
            if (email.value.trim() === "") {
                isError(email);
            }
            if (phone.value.trim() === "") {
                isError(phone);
            }
            if (street.value.trim() === "") {
                isError(street);
            }
            if (city.value.trim() === "") {
                isError(city);
            }
            if (state.value === "noState") {
                isError(state);
            }
            if (zip.value.trim() === "") {
                isError(zip);
            }
            // If any of the fields are empty, show an error message
            document.getElementById("formError").innerText = "Please fill out all of the fields.";
            return;
        } else {
            // Capitalize the first letter of each word in the street address
            street.value = capitalizeCityStreet(street.value.trim());
            // Capitalize the first letter of the first name and last name
            first_name.value = capitalize(first_name.value.trim());
            last_name.value = capitalize(last_name.value.trim());
            // Capitalize the first letter of the city
            city.value = capitalizeCityStreet(city.value.trim());
            // Capitalize the state abbreviation
            state.value = capitalize(state.value);
        } 
    }
    );


}

if (login_form) {
    const email = document.getElementById("email");
    const togglePassword = document.getElementById("togglePassword");
    const password = document.getElementById("password");
    let emailError, phoneError = false;

    togglePassword.addEventListener("click", () => {
        const type = password.type === "password" ? "text" : "password";
        password.type = type;
    });

    login_form.addEventListener("submit", (e) => {
        if (email.value.trim() === "" && phone.value.trim() === "") {
            e.preventDefault();
            document.getElementById("formError").innerText = "Please enter an both email and password.";
            return;
        } 
    }
    );


}


// HERE IS THE EDIT FORM ERROR CATCHING LISTENERS


// This first one is catching errors in user input for the form which creates a new account.
if (edit_form) {
    const first_name = document.getElementById("first_name");
    const last_name = document.getElementById("last_name");
    const phone = document.getElementById("phone");
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");
    let hasError = false;

    first_name.addEventListener("change", (e) => {
        const nameValue = e.target.value.trim();

        if (nameValue === "" || nameValue === null) {
            document.getElementById("nameError").innerText = "";
            noError(first_name);
            hasError = false;
        } else if (nameValue.length < 3) {
            document.getElementById("nameError").innerText = "First and last names must be at least 3 characters";
            isError(first_name);
            hasError = true;
        } else if (!/^[a-zA-Z]+$/.test(nameValue)) {
            document.getElementById("nameError").innerText = "First and last names can only have letters";
            isError(first_name);
            hasError = true;
        } else {
            document.getElementById("nameError").innerText = "";
            noError(first_name);
            hasError = false;
        }
    });

    last_name.addEventListener("change", (e) => {
        const nameValue = e.target.value.trim();

        if (nameValue === "" || nameValue === null) {
            document.getElementById("nameError").innerText = "";
            noError(last_name);
            hasError = false;
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

    phone.addEventListener("change", (e) => {
        const phoneValue = e.target.value.trim();

        if (phoneValue === "" || phoneValue === null) {
            document.getElementById("phoneError").innerText = "";
            noError(phone);
            hasError = false;
        } else if (!/^\d{10}$/.test(phoneValue)) {
            document.getElementById("phoneError").innerText = "Phone number must be 10 digits";
            isError(phone);
            hasError, phoneError = true;
        } else {
            document.getElementById("phoneError").innerText = "";
            noError(phone);
            hasError, phoneError = false;
        }
    });

    street.addEventListener("change", (e) => {
        const streetValue = e.target.value.trim();

        if (streetValue === "" || streetValue === null) {
            document.getElementById("streetError").innerText = "";
            noError(street);
            hasError = false;
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
            document.getElementById("cityError").innerText = "";
            noError(city);
            hasError = false;
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
            document.getElementById("zipError").innerText = "";
            noError(zip);
            hasError = false;
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
    // BELOW WE IS THE ACTUAL FORM LISTENER -
    // IT CHECKS IF THERE ARE ANY ERRORS IN THE FORM
    // BASED ON THE ABOVE INDIVIDUAL INPUT ERROR CATCHING LISTENERS
    // 

    edit_form.addEventListener("submit", (e) => {
        if (hasError) {
            e.preventDefault();
            document.getElementById("formError").innerText = "Please fix the errors in the form before submitting.";
            return;
        } else if (
                first_name.value.trim() === "" || last_name.value.trim() === "" || 
                phone.value.trim() === "" || street.value.trim() === "" || 
                city.value.trim() === "" || state.value === "noState" || 
                zip.value.trim() === ""
            ){
            e.preventDefault();
            document.getElementById("formError").innerText = "Please fill out all of the fields.";
            return;
        } else {
            // Capitalize the first letter of each word in the street address
            street.value = capitalizeCityStreet(street.value.trim());
            // Capitalize the first letter of the first name and last name
            first_name.value = capitalize(first_name.value.trim());
            last_name.value = capitalize(last_name.value.trim());
            // Capitalize the first letter of the city
            city.value = capitalizeCityStreet(city.value.trim());
            // Capitalize the state abbreviation
            state.value = capitalize(state.value);
        } 
    }
    );


}



// this just implements the error styles when an error is detected.

function isError(input) {
    input.style.border = "2px solid red";
    if (input.id === "password") {
        input.style.background = "url('data:image/svg+xml;utf8,<svg fill=\"red\" height=\"18\" viewBox=\"0 0 24 24\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 0 0 L 5 0 L 5 14 L 0 14 L 0 0 M 0 18 L 5 18 L 5 23 L 0 23 L 0 18\"/></svg>') no-repeat right 35px center/18px 18px";
    } else {
        input.style.background = "url('data:image/svg+xml;utf8,<svg fill=\"red\" height=\"18\" viewBox=\"0 0 24 24\" width=\"18\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 0 0 L 5 0 L 5 14 L 0 14 L 0 0 M 0 18 L 5 18 L 5 23 L 0 23 L 0 18\"/></svg>') no-repeat right 10px center/18px 18px";
    }
}

function noError(input) {
    input.style.border = "2px solid lightslategray";
    input.style.background = "none";
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeCityStreet(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
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
