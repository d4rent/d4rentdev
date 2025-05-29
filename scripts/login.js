document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    fetch('http://d4rent-env.eba-nyk56kew.eu-west-1.elasticbeanstalk.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.access_token) {
            localStorage.setItem('token', data.access_token);
            window.location.href = '../pages/profile.html'; // Use relative path if login.html is in /pages/
        } else {
            alert(data.message || data.error || 'Login failed');
        }
    })
    .catch(() => {
        alert('Network error. Please try again.');
    });
});