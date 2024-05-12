document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('changePasswordForm');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMismatchError = document.getElementById('passwordMismatch');
    const successMessage = document.getElementById('successMessage');
    const okButton = document.getElementById('okButton');

    

    passwordMismatchError.style.display = 'none';
    successMessage.style.display = 'none';
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (confirmPasswordInput.value !== document.getElementById('newPassword').value) {
            passwordMismatchError.style.display = 'block';
        } else {
            passwordMismatchError.style.display = 'none';

            // Add your code here to submit the form or change the password
            // For example, you can use the Fetch API to send a request to your server

            // Assume password change is successful, display success message
            successMessage.style.display = 'block';
            form.reset(); // Reset form fields
        }
    });

    okButton.addEventListener('click', function() {
        if (confirmPasswordInput.value !== document.getElementById('newPassword').value ) {
            passwordMismatchError.style.display = 'block';
        }else if (newPassword.trim() === '' || confirmPassword.trim() === '') {
            // Display error message if any of the input fields are empty
            document.getElementById('emptyFieldError').style.display = 'block';
            return;
        }
        else {
            successMessage.style.display = 'block';
        }
        
        window.location.href = 'admin.html';
       
    });
});