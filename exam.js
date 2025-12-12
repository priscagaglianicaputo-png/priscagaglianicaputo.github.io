document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('menu');

    if (hamburgerBtn && menu) {
        hamburgerBtn.addEventListener('click', () => {
            menu.classList.toggle('show');
            console.log("Hamburger clicked");
        });

        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('show');
                console.log("Link clicked");
            });
        });
    }

    // COLLABORATION FORM
    const form = document.getElementById('collab-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formMessage.style.color = 'red';
                formMessage.textContent = 'Please fill in all fields.';
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                formMessage.style.color = 'red';
                formMessage.textContent = 'Please enter a valid email.';
                return;
            }

            formMessage.style.color = 'green';
            formMessage.textContent = 'Thank you! Your message has been sent.';
            form.reset();
        });
    }

    // COOKIES 
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');

    const cookieChoice = localStorage.getItem('cookie-consent');

    if (cookieChoice === 'accepted' || cookieChoice === 'declined') {
        banner.style.display = 'none';
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookie-consent', 'accepted');
            banner.style.display = 'none';
            console.log("Cookies accepted");
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem('cookie-consent', 'declined');
            banner.style.display = 'none';
            console.log("Cookies declined");
        });
    }
});
