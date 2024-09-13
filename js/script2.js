document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        // Clear previous errors
        clearErrors();
        
        // Perform validation
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        let isValid = true;
        
        if (username === '') {
            showError('usernameError', 'Username is required');
            isValid = false;
        }
        
        if (email === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('emailError', 'Email is not valid');
            isValid = false;
        }
        
        if (password === '') {
            showError('passwordError', 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            showError('passwordError', 'Password must be at least 6 characters long');
            isValid = false;
        }
        
        if (isValid) {
            // Display success message
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = 'Form submitted successfully!';
            resultDiv.style.color = 'green';
        }
    });
    
    function showError(id, message) {
        const errorDiv = document.getElementById(id);
        errorDiv.textContent = message;
    }
    
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.textContent = '';
        });
    }
    
    function validateEmail(email) {
        // Simple email regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
