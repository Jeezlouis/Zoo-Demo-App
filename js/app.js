document.addEventListener("DOMContentLoaded", function() {
    // Update copyright year
    const year = new Date().getFullYear();
    const copyrightElement = document.querySelector('#copyright-year');
    if (copyrightElement) {
        copyrightElement.textContent = year;
    }

    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryImages = document.querySelectorAll('.image-gallery');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = button.dataset.filter;

            galleryImages.forEach(img => {
                if (category === 'all' || img.dataset.filter === category) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

    // Navbar scroll functionality
    document.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 700) {
                nav.classList.add('nav-bar');
            } else {
                nav.classList.remove('nav-bar');
            }
        }
    });

    // Sign-up form functionality
    const signUpForm = document.querySelector('.sign-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name') ? document.getElementById('name').value.trim() : '';
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword') ? document.getElementById('confirmPassword').value.trim() : '';
            const error = document.querySelector('.error');
            const success = document.querySelector('.success');

            if (name === '' || email === '' || password === '' || confirmPassword === '') {
                if (error) error.textContent = "Please fill in all fields";
                if (success) success.style.display = 'none';
                return;
            }

            if (password !== confirmPassword) {
                if (error) error.textContent = "The passwords do not match";
                if (success) success.style.display = 'none';
                return;
            }

            if (name && email && password && confirmPassword && password === confirmPassword) {
                if (success) success.textContent = "Congratulations, you have signed up!";
                if (error) error.style.display = 'none';
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            }
        });
    }

    // Login form functionality
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const error = document.querySelector('.error');
            const success = document.querySelector('.success');

            if (email === '' || password === '') {
                if (error) error.textContent = "Please fill in all fields.";
                if (success) success.textContent = '';
                return;
            }

            if (email && password) {
                if (success) success.textContent = "Congratulations, you have successfully logged in!";
                if (error) error.textContent = '';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                if (error) error.textContent = "Invalid email or password. Please try again.";
                if (success) success.textContent = '';
            }
        });
    }
    
    



            
        
});
