const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://quantum-auth.onrender.com'
  : 'http://localhost:8000';

export default API_URL;