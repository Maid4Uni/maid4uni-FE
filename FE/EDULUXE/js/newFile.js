const showLoginButton = document.getElementById('show-login');
const loginPopup = document.getElementById('login-popup');
const closeLoginButton = document.getElementById('close-login-popup');

// Event listeners to show and hide the login popup
showLoginButton.addEventListener('click', () => {
    loginPopup.style.display = 'block';
});

closeLoginButton.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

