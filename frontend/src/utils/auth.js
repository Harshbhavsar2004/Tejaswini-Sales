export async function fetchUserDetails() {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error("No token found");
    return null;
  }

  try {
    const response = await fetch('http://localhost:5000/api/users/get-user-info', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to validate token');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Network error:', error);
    return null;
  }
}

export function isAdmin() {
  const token = localStorage.getItem('token');
  if (!token) return false;

  const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT token
  return payload.role === 'admin'; // Check if the role is admin
} 