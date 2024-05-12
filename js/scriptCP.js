document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('changePasswordForm');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMismatchError = document.getElementById('passwordMismatch');
    const successMessage = document.getElementById('successMessage');
    const okButton = document.getElementById('okButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for now
        if (confirmPasswordInput.value !== document.getElementById('newPassword').value) {
            passwordMismatchError.style.display = 'block';
        } else {
            passwordMismatchError.style.display = 'none';
            // Assume password change is successful, display success message
            successMessage.style.display = 'block';
            form.reset(); // Reset form fields
        }
    });

    okButton.addEventListener('click', function() {
        // Redirect to admin.html after clicking OK button
        window.location.href = 'admin.html';
    });
});
