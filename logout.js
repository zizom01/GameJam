document.querySelectorAll('.logoutButton').forEach(button => {
    button.addEventListener('click', async () => {
    try {
      const response = await fetch('/logout', {
        method: 'POST'
      });
      
      if (response.ok) {
        alert('Logged out successfully');
        window.location.href = '/login'; // Redirect to login page after logout
      } else {
        alert('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Logout failed');
    }
    });
  });
  