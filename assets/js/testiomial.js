
            function handleFormSubmit(event) {
                event.preventDefault(); // Prevent the default form submission
    
                // Get the form data
                const name = document.querySelector('input[name="name"]').value;
                const email = document.querySelector('input[name="email"]').value;
                const company = document.querySelector('input[name="company"]').value;
                const testimonial = document.querySelector('textarea[name="testimonial"]').value;
    
                // Construct WhatsApp URL
                const whatsappNumber = '2349034529830'; // Replace with your WhatsApp number
                const whatsappMessage = encodeURIComponent(`Hi, I am ${name}. My email is ${email}. My company is ${company}. Here is my testimonial: ${testimonial}`);
    
                // Redirect to WhatsApp
                window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            }
