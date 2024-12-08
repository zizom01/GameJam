document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
  
      const messageElement = document.getElementById('message');
      if (response.ok) {
        alert("Registered Successfully Redirecting To Login Page");
        window.location.href = '/';
      } else {
        const errorText = await response.text();
        messageElement.textContent = `Error: ${errorText}`;
        messageElement.style.color = 'red';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  });
  