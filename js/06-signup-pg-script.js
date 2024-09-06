// Validação dos dados do formulário de cadastro de conta
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isInfoValid = true;

    const emailInput = document.getElementById('email-address');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('error');
        emailError.style.display = 'block'; // Mostrar erro
        isInfoValid = false;
    } else {
        emailInput.classList.remove('error');
        emailError.style.display = 'none'; // Esconder erro
    }

    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (passwordInput.value.length < 8) {
        passwordInput.classList.add('error');
        passwordError.style.display = 'block'; // Mostrar erro
        isInfoValid = false;
    } else {
        passwordInput.classList.remove('error');
        passwordError.style.display = 'none'; // Esconder erro
    }

    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.classList.add('error');
        confirmPasswordError.style.display = 'block'; // Mostrar erro
        isInfoValid = false;
    } else {
        confirmPasswordInput.classList.remove('error');
        confirmPasswordError.style.display = 'none'; // Esconder erro
    }

    if (isInfoValid) {
        document.getElementById('registration-form').submit();
    }
});
