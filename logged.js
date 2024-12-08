// Function to fetch the current user info
async function fetchUsername() {
    try {
      const response = await fetch('/api/current-user'); // Create this endpoint to get user data
      if (response.ok) {
        const data = await response.json();
        document.getElementById('logged').textContent = data.username; // Display username
        document.getElementById('logged2').textContent = data.username; // Display username in toggle bar
      } else {
        console.error('Failed to fetch username');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the function on page load
  fetchUsername();
  