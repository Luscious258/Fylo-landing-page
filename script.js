// Load the EmailJS SDK
(function () {
  emailjs.init('pnSS8AsZkdATi__2I'); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
})();

// Add event listener to the form
document.getElementById('myForm').addEventListener('submit', function (event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form data
  const formData = new FormData(this);

  // Send email using EmailJS
  emailjs.sendForm('service_ioxmhii', 'template_xgadu4a', formData).then(
    function (response) {
      console.log('Email sent successfully:', response);
      // Optionally, you can display a success message or redirect the user to a thank you page
    },
    function (error) {
      console.error('Error sending email:', error);
      // Optionally, you can display an error message to the user
    }
  );
});
