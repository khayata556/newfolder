// Contact form script
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve input values
    const name = document.getElementById("name").value;
    const senderEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Define the destination email
    const destinationEmail = "ah_khayat@yahoo.com.com";

    // Create the mailto link
    const mailtoLink = `mailto:${destinationEmail}?subject=Message from ${name} (${senderEmail})&body=${encodeURIComponent(message)}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
}

// Attach event listener to the form
window.onload = function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
};
