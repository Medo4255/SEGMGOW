document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        
        // Get form data
        const itemCategory = form.querySelector('#itemCategory').value;
        const details = form.querySelector('#details').value;
        const image = form.querySelector('#image').files[0]; // Get the selected image file

        // Simulate submission confirmation
        const isConfirmed = confirm('Are you sure you want to submit this donation post?');

        if (isConfirmed) {
            // Display success message
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.textContent = 'Donation post submitted successfully!';
            document.body.appendChild(successMessage);

            // Add fading animation
            setTimeout(() => {
                successMessage.style.opacity = '0';
                successMessage.style.transform = 'translateY(50px)'; // Move the message upward
            }, 3000); // Adjust duration as needed

            // Remove message from DOM after animation completes
            setTimeout(() => {
                successMessage.remove();
            }, 4000); // Adjust duration to match animation duration + delay

            // Redirect after animation ends
            setTimeout(() => {
                window.location.href = 'org.html';
            }, 4000); // Adjust duration to match animation duration + delay
        }
    });
});
