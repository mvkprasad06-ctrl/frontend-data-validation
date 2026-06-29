# Frontend Data Validation

Name: Meesala Venkata Krishna Prasad

## Project Overview

This project is a Student Registration Form with frontend data validation using HTML, CSS, and JavaScript.

The main objective of this project is to validate user input on the client side before the data is submitted. It helps ensure that only correct and complete data is accepted.

## Features

- Full name validation
- Email validation
- Phone number validation
- Password validation
- Confirm password matching
- Course selection validation
- Terms and conditions checkbox validation
- Error messages for invalid inputs
- Success message after valid submission

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open index.html in a browser.
4. Fill the form and test the validation.

## Validation Rules

- Full name must not be empty and should have at least 3 characters.
- Email must be in valid format.
- Phone number must contain exactly 10 digits.
- Password must be at least 6 characters.
- Confirm password must match the password.
- Course must be selected.
- Terms and conditions must be accepted.

## Project Result

The project successfully validates form inputs on the frontend using JavaScript and displays proper error messages when invalid data is entered.

## Live Demo

View the deployed project here:

https://mvkprasad06-ctrl.github.io/frontend-data-validation/

## File Structure and Purpose

| File Name | Purpose |
|---|---|
| index.html | Contains the main HTML structure of the student registration form, including input fields, labels, course dropdown, checkbox, submit button, and links to CSS and JavaScript files. |
| style.css | Contains all styling for the project, including page layout, colors, form design, spacing, shadows, buttons, and responsive appearance. |
| script.js | Contains the JavaScript validation logic for full name, email, phone number, password, confirm password, course selection, and terms checkbox. |
| README.md | Contains the project overview, features, technologies used, validation rules, live demo link, and file purpose details. |

## Project Description

This repository contains a frontend student registration form built using HTML, CSS, and JavaScript. The project validates user input before form submission and displays proper error messages for invalid details such as empty name, incorrect email, invalid phone number, weak password, password mismatch, unselected course, and unchecked terms and conditions.

## Testing Framework

This project uses Jest with jsdom to test frontend validation functionality.

### Testing Tools Used

- Jest
- jest-environment-jsdom
- @testing-library/dom

### Test Cases Covered

- HTML page loads correctly
- Empty form submission shows validation errors
- Invalid input data shows proper error messages
- Valid form submission shows success message
- JavaScript validation logic is tested with 100% coverage

### Run Tests

npm test

### Run Coverage Report

npm run coverage
