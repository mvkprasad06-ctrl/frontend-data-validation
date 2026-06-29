const fs = require("fs");
const path = require("path");

describe("Frontend Data Validation Tests", () => {
  let html;

  function loadPage() {
    html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
    document.documentElement.innerHTML = html;
    jest.resetModules();
    require("../script.js");
  }

  beforeEach(() => {
    loadPage();
  });

  test("index.html should load correctly", () => {
    expect(document.body).toBeTruthy();
    expect(document.getElementById("registrationForm")).not.toBeNull();
  });

  test("empty form submission should show validation errors", () => {
    const form = document.getElementById("registrationForm");

    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    expect(document.getElementById("nameError").innerText).toBe("Full name is required");
    expect(document.getElementById("emailError").innerText).toBe("Email is required");
    expect(document.getElementById("phoneError").innerText).toBe("Phone number is required");
    expect(document.getElementById("passwordError").innerText).toBe("Password is required");
    expect(document.getElementById("confirmPasswordError").innerText).toBe("Confirm password is required");
    expect(document.getElementById("courseError").innerText).toBe("Please select a course");
    expect(document.getElementById("termsError").innerText).toBe("You must agree to the terms and conditions");
  });

  test("invalid data should show proper validation messages", () => {
    document.getElementById("name").value = "AB";
    document.getElementById("email").value = "wrongemail";
    document.getElementById("phone").value = "12345";
    document.getElementById("password").value = "123";
    document.getElementById("confirmPassword").value = "456";

    const form = document.getElementById("registrationForm");
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    expect(document.getElementById("nameError").innerText).toBe("Name must be at least 3 characters");
    expect(document.getElementById("emailError").innerText).toBe("Enter a valid email address");
    expect(document.getElementById("phoneError").innerText).toBe("Phone number must be exactly 10 digits");
    expect(document.getElementById("passwordError").innerText).toBe("Password must be at least 6 characters");
    expect(document.getElementById("confirmPasswordError").innerText).toBe("Passwords do not match");
  });

  test("valid form submission should show success message", () => {
    document.getElementById("name").value = "Prasad";
    document.getElementById("email").value = "prasad@example.com";
    document.getElementById("phone").value = "9876543210";
    document.getElementById("password").value = "password123";
    document.getElementById("confirmPassword").value = "password123";

    const course = document.getElementById("course");
    course.selectedIndex = 1;

    document.getElementById("terms").checked = true;

    const form = document.getElementById("registrationForm");
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    expect(document.getElementById("successMessage").innerText).toBe("Registration successful! All data is valid.");
  });
});
