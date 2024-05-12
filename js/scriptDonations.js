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

            // Add fading animation and position the message in the lower half of the screen
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'translate(-50%, 50%)'; // Move the message upward
            successMessage.style.bottom = '10%';
            setTimeout(() => {
                successMessage.style.opacity = '1';
            }, 100); // Adjust duration as needed

            // Remove message from DOM after animation completes
            setTimeout(() => {
                successMessage.style.opacity = '0';
                setTimeout(() => {
                    successMessage.remove();
                }, 1000); // Adjust duration to match animation duration
            }, 3000); // Adjust duration to match animation duration + delay

            // Redirect after animation ends
            setTimeout(() => {
                window.location.href = 'org.html';
            }, 4000); // Adjust duration to match animation duration + delay
        }
    });

    // Dynamically add specific form fields for each category
    document.getElementById('itemCategory').addEventListener('change', function() {
        var category = this.value;
        var additionalFieldsDiv = document.getElementById('additionalFields');
        additionalFieldsDiv.innerHTML = ''; // Clear previous fields

        if (category === 'Toys') {
            // Add fields for toys
            additionalFieldsDiv.innerHTML = `
                <label for="toyType">Type:</label>
                <input type="text" id="toyType" name="toyType" required><br><br>
                <label for="toyAmount">Amount:</label>
                <input type="number" id="toyAmount" name="toyAmount" required><br><br>
                <label for="toyWeight">Weight:</label>
                <input type="text" id="toyWeight" name="toyWeight" required><br><br>
            `;
        } else if (category === 'Clothing') {
            // Add fields for clothing
            additionalFieldsDiv.innerHTML = `
                <label for="clothingType">Type:</label>
                <input type="text" id="clothingType" name="clothingType" required><br><br>
                <label for="clothingGender">Gender:</label>
                <select id="clothingGender" name="clothingGender" required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unisex">Unisex</option>
                </select><br><br>
                <label for="clothingSize">Size:</label>
                <input type="text" id="clothingSize" name="clothingSize" required><br><br>
                <label for="clothingQuantity">Quantity:</label>
                <input type="number" id="clothingQuantity" name="clothingQuantity" required><br><br>
            `;
        }
        // Add conditions and form fields for other categories as needed
    });
});