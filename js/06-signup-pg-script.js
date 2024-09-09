// Validating the form data
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email-address').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.style.display = 'none';
    errorMessage.innerText = '';

    if (password !== confirmPassword) {
        errorMessage.innerText = 'The passwords don\'t match. Try again.';
        errorMessage.style.display = 'block';
        return;
    }

    // Store data in localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);

    // Redirect to the account created page
    window.location.href = '../html/07-account-created-structure.html';
});
