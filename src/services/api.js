import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Update with your backend URL

export const getProperties = async () => {
  try {
    const response = await axios.get(`${API_URL}/properties`);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

// Add more API functions here (e.g., getPropertyById, createBooking, etc.)