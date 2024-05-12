document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        
        // Get form data
        const itemCategory = form.querySelector('#itemCategory').value;
        const details = form.querySelector('#details').value;
        const image = form.querySelector('#image').files[0]; // Get the selected image file

        // Process form data (e.g., submit it to server or perform validation)
        // Here, you can send the form data to your backend using AJAX or fetch API
        
        // Reset form after submission
        form.reset();
    });
});
