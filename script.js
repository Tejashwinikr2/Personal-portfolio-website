// When the contact form is submitted...
document.getElementById("contact-form").addEventListener("submit", function (e) {
  // Prevent the default form submission (which would refresh the page)
  e.preventDefault();

  // Get values from input fields and trim whitespace
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // If any field is empty, alert the user
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
  }
  // If all fields are filled, show a thank-you alert
  else {
    alert("Thanks for your message, " + name + "!");
    // Clear the form fields
    this.reset();
  }
});