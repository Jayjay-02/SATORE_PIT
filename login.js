document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginLink = document.getElementById("loginLink");
    const signupLink = document.getElementById("signupLink");

    // Switch to sign up form
    loginLink.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector('.container').classList.remove('right-panel-active');
    });

    // Switch to login form
    signupLink.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector('.container').classList.add('right-panel-active');
    });

    // Login
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            // Login successful, redirect to main page
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    // Sign up
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;

        // Store new username and password in localStorage
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPassword);

        alert("Account created successfully. You can now login.");
        // Automatically switch to login form after sign up
        document.querySelector('.container').classList.remove('right-panel-active');
    });
});
