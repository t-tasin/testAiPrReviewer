// script.js

// This function will be executed when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the HTML element with the id 'message-container'
    const messageContainer = document.getElementById('message-container');

    // Check if the element exists before attempting to modify it
    if (messageContainer) {
        // Set the inner HTML of the element to display "Hello from JavaScript!"
        messageContainer.innerHTML = 'Hello from JavaScript!';
        console.log('Message displayed successfully!');
    } else {
        console.error('Element with id "message-container" not found.');
    }

    // Example of a simple alert
    // alert('This is an alert from the JavaScript file!');
});

// Another function that could be called later, for example, by a button click
function greetUser(userName) {
    console.log(`Hello, ${userName}! Welcome to the page.`);
}
