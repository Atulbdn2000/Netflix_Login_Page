function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Perform login action (e.g., send data to server)
    // Here we'll just log the values to the console for demonstration purposes
    console.log('Email:', email);
    console.log('Password:', password);
    
    // For actual login functionality, you would replace the above with an AJAX request to your server
}
