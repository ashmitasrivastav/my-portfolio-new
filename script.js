document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        // Simulate form submission
        document.getElementById('responseMessage').textContent = 'Thank you for your message! We will get back to you soon.';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Please fill out all fields.';
    }
});

document.getElementById('resumeButton').addEventListener('click', function() {
    console.log('Resume download initiated.');
});
