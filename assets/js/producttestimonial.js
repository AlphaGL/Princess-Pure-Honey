document.getElementById('reviewForm').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const product = document.querySelector('input[name="product"]').value;
    const rating = document.querySelector('select[name="rating"]').value;
    const review = document.querySelector('textarea[name="review"]').value;

    // Construct WhatsApp URL
    const whatsappNumber = '2349034529830'; // Replace with your WhatsApp number
    const whatsappMessage = encodeURIComponent(`
Hi, I am ${name}.
Email: ${email}. 
I have reviewed the honey product: "${product}", with a rating of ${rating}. 
Here is my review: 
${review}`);

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
}
