const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  clearErrors();

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const course = document.getElementById("course").value;
  const terms = document.getElementById("terms").checked;

  if (name === "") {
    showError("nameError", "Full name is required");
    isValid = false;
  } else if (name.length < 3) {
    showError("nameError", "Name must be at least 3 characters");
    isValid = false;
  }

  if (email === "") {
    showError("emailError", "Email is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("emailError", "Enter a valid email address");
    isValid = false;
  }

  if (phone === "") {
    showError("phoneError", "Phone number is required");
    isValid = false;
  } else if (!/^[0-9]{10}$/.test(phone)) {
    showError("phoneError", "Phone number must be exactly 10 digits");
    isValid = false;
  }

  if (password === "") {
    showError("passwordError", "Password is required");
    isValid = false;
  } else if (password.length < 6) {
    showError("passwordError", "Password must be at least 6 characters");
    isValid = false;
  }

  if (confirmPassword === "") {
    showError("confirmPasswordError", "Confirm password is required");
    isValid = false;
  } else if (password !== confirmPassword) {
    showError("confirmPasswordError", "Passwords do not match");
    isValid = false;
  }

  if (course === "") {
    showError("courseError", "Please select a course");
    isValid = false;
  }

  if (!terms) {
    showError("termsError", "You must agree to the terms and conditions");
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").innerText = "Registration successful! All data is valid.";
    form.reset();
  }
});

function showError(id, message) {
  document.getElementById(id).innerText = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(error => error.innerText = "");
  document.getElementById("successMessage").innerText = "";
}

function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return pattern.test(email);
}

// script.js: Frontend validation logic for registration form inputs
