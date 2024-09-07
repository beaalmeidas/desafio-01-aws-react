// Validating the form data
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email-address').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const queryString = `?full-name=${encodeURIComponent(fullName)}&email-address=${encodeURIComponent(email)}`;
    window.location.href = `../html/07-account-created-structure.html${queryString}`;
});