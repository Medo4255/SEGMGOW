document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donationForm');
    const additionalFieldsDiv = document.getElementById('additionalFields');

    // Object mapping categories to their corresponding additional fields
    const additionalFieldsMap = {
        'Toys': `
            <label for="toyType">Type:</label>
            <input type="text" id="toyType" name="toyType" required><br><br>
            <label for="toyAmount">Amount:</label>
            <input type="number" id="toyAmount" name="toyAmount" required><br><br>
            <label for="toyWeight">Weight:</label>
            <input type="text" id="toyWeight" name="toyWeight" required><br><br>
        `,
        'Clothing': `
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
        `,
        'Books': `
            <label for="bookGenre">Genre:</label>
            <input type="text" id="bookGenre" name="bookGenre" required><br><br>
            <label for="bookTarget">Target People:</label>
            <input type="text" id="bookTarget" name="bookTarget" required><br><br>
            <label for="bookAmount">Amount:</label>
            <input type="number" id="bookAmount" name="bookAmount" required><br><br>
            <label for="bookSpecs">Specifications:</label>
            <textarea id="bookSpecs" name="bookSpecs" rows="4" cols="50" required></textarea><br><br>
        `,
        'Blood Donations': `
            <label for="bloodType">Blood Type:</label>
            <input type="text" id="bloodType" name="bloodType" required><br><br>
            <label for="bloodBags">Amount of Blood Bags:</label>
            <input type="number" id="bloodBags" name="bloodBags" required><br><br>
            <label for="bloodUrgency">Urgency Level:</label>
            <input type="text" id="bloodUrgency" name="bloodUrgency" required><br><br>
        `,
        'Medical Supplies': `
            <label for="medType">Type:</label>
            <input type="text" id="medType" name="medType" required><br><br>
            <label for="medAmount">Amount:</label>
            <input type="number" id="medAmount" name="medAmount" required><br><br>
            <label for="medSpecs">Specifications:</label>
            <textarea id="medSpecs" name="medSpecs" rows="4" cols="50" required></textarea><br><br>
            <label for="medUrgency">Urgency Level:</label>
            <input type="text" id="medUrgency" name="medUrgency" required><br><br>
        `,
        'School Supplies': `
            <label for="schoolType">Type:</label>
            <input type="text" id="schoolType" name="schoolType" required><br><br>
            <label for="schoolAmount">Amount:</label>
            <input type="number" id="schoolAmount" name="schoolAmount" required><br><br>
            <label for="schoolQuality">Quality:</label>
            <input type="number" id="schoolQuality" name="schoolQuality" min="1" max="5" required>
            <label for="schoolQuality">1 (being worst) -&gt; 5 (being best)</label><br><br>
        `,
        'Food': `
            <label for="foodType">Type:</label>
            <input type="text" id="foodType" name="foodType" required><br><br>
            <label for="foodQuantity">Quantity:</label>
            <input type="number" id="foodQuantity" name="foodQuantity" required><br><br>
            <label for="foodExpiry">Expiry Date:</label>
            <input type="date" id="foodExpiry" name="foodExpiry" required><br><br>
        `
        // Add more categories and corresponding fields as needed
    };

    // Function to show additional fields based on selected category
    function showAdditionalFields(category) {
        if (additionalFieldsMap.hasOwnProperty(category)) {
            additionalFieldsDiv.innerHTML = additionalFieldsMap[category];
        } else {
            additionalFieldsDiv.innerHTML = ''; // Clear additional fields if category has no extra fields
        }
    }

    // Event listener for category selection
    document.getElementById('itemCategory').addEventListener('change', function() {
        const category = this.value;
        showAdditionalFields(category);
    });

    // Event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate form fields (including dynamically added fields)
        const isValid = form.checkValidity();

        if (isValid) {
            // Display success message
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.textContent = 'Donation post submitted successfully!';
            document.body.appendChild(successMessage);

            // Fade in success message
            successMessage.style.opacity = '0';
            setTimeout(() => {
                successMessage.style.opacity = '1';
            }, 100);

            // Fade out and remove success message after a delay
            setTimeout(() => {
                successMessage.style.opacity = '0';
                setTimeout(() => {
                    successMessage.remove();
                }, 1000);
            }, 3000);

            // Redirect to org_request_details.html after message fades out
            setTimeout(() => {
                window.location.href = 'org_request_details.html';
            }, 4000);
        }
    });
});
