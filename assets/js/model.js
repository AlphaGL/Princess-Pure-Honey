document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        handleFormSubmit(event);
    });

    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        const email = document.querySelector('input[name="email"]').value;
        const name = document.querySelector('input[name="name"]').value;
        const subject = document.querySelector('input[name="subject"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Construct WhatsApp URL
        const whatsappNumber = '2349034529830'; // Replace with your WhatsApp number
        const whatsappMessage = encodeURIComponent(`
Hi, I am ${name}. 
Email: ${email}. 
Project/Inquiry: ${subject}. 
Message: 
${message}`);

        // Redirect to WhatsApp
        window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    }
});