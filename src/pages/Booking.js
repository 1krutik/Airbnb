import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { getPropertyById, createBooking } from '../services/api';

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      setIsLoading(true);
      try {
        // const data = await getPropertyById(id);
        // Dummy data for now
        const data = {
          id: id,
          title: 'Cozy Apartment',
          price: 100,
          location: 'New York, NY',
        };
        setProperty(data);
      } catch (err) {
        setError('Failed to fetch property details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // await createBooking(id, bookingData);
      console.log('Booking submitted:', { propertyId: id, ...bookingData });
      alert('Booking successful!');
      navigate('/');
    } catch (err) {
      setError('Failed to create booking. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!property) return <div className="text-center py-8">Property not found.</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Book Your Stay</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{property.title}</h2>
          <p className="text-gray-600 mb-4">{property.location}</p>
          <p className="text-3xl font-bold mb-6">${property.price} <span className="text-gray-600 text-base font-normal">per night</span></p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="checkIn" className="block mb-1 font-medium text-gray-700">Check-in Date</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={bookingData.checkIn}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="checkOut" className="block mb-1 font-medium text-gray-700">Check-out Date</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={bookingData.checkOut}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="guests" className="block mb-1 font-medium text-gray-700">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={bookingData.guests}
                onChange={handleChange}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Confirm Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;