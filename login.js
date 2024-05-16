// Selecting elements
const forms = document.querySelector(".forms");
const links = document.querySelectorAll(".link");

// Toggle signup form
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); 
        forms.classList.toggle("show-signup");
    });
});

// Signup functionality
const signupForm = document.querySelector('.signup form');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('.signup .field input[type="email"]').value;
    const password = document.querySelector('.signup .field input[type="password"]').value;
    const inputname = document.querySelector('.signup #name').value;

    // Check if email already exists in localStorage
    if (localStorage.getItem(email)) {
        alert('User already exists. Please log in.');
        return;
    }

    // Store email and password in localStorage
    localStorage.setItem(email, password);
    localStorage.setItem('Username', inputname);

    // Redirect to main page
    window.location.href = 'index.html';
});

// Login functionality
const signinForm = document.querySelector('.login form');

signinForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.querySelector('.login .input').value;
    const password = document.querySelector('.login .password').value;

    // Retrieve stored password for the entered email
    const storedPassword = localStorage.getItem(email);

    // Check if email exists and password matches
    if (storedPassword && password === storedPassword) {
        window.location.href = 'main.html'; // Redirect to main page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
