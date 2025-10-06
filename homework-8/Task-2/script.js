const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");

const fullnameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

const showError = (field, message) => {
    const errorElement = document.querySelector(`.error[data-for="${field}"]`);
    if (errorElement) {
        errorElement.textContent = message;
    }
};

const checkInput = (value, field, regex) => {
    if (!value.trim()) {
        showError(field, `${field} is required`);
        return false;
    } else if (!regex.test(value)) {
        showError(field, `Invalid ${field}`);
        return false;
    } else {
        showError(field, ""); 
        return true;
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = checkInput(fullname.value, "fullname", fullnameRegex);
    const isEmailValid = checkInput(email.value, "email", emailRegex);
    const isPasswordValid = checkInput(password.value, "password", passwordRegex);

    let isConfirmValid = true;
    if (!confirmPassword.value.trim()) {
        showError("confirm", "confirm password is required");
        isConfirmValid = false;
    } else if (confirmPassword.value !== password.value) {
        showError("confirm", "passwords do not match");
        isConfirmValid = false;
    } else {
        showError("confirm", "");
    }

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
        alert("Form submitted successfully");
        form.reset();
    }
});
