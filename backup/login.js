document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from submitting the default way
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:3000/api/login', { // Replace with your server's URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const messageElement = document.getElementById('message');
      if (response.ok) {
        window.location.href = '/';
      } else {
        alert("Wrong Credentials. Please try again");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  });
  