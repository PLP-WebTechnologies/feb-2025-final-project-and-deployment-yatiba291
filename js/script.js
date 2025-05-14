// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageDiv = document.getElementById('formMessage');

    if (!name || !email || !message) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    showMessage('Message sent successfully!', 'success');
    e.target.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    setTimeout(() => messageDiv.textContent = '', 3000);
}

// Read more buttons
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        alert('Feature coming soon!');
    });
});