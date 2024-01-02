emailjs.init('WrhkANe336QmdL9Oh');


const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const query = document.getElementById('query').value.trim();

    if (username === '' || email === '' || query === '') {
        alert('Please fill out all fields');
        return;
    }

    emailjs.send('service_ewuxm5r', 'template_iqfx7r1', {
        from_name: username,
        from_email: email,
        message: query
    })
    .then(function(response) {
        console.log('Email sent: ', response);
        alert('Email sent successfully!');
        form.reset();
    })
    .catch(function(error) {
        console.error('Error sending email: ', error);
        alert('Please try again');
    });
});
