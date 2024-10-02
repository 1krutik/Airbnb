import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyById } from '../services/propertyService';

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchedProperty = getPropertyById(parseInt(id));
    setProperty(fetchedProperty);
  }, [id]);

  if (!property) {
    return <div className="container py-5">Loading...</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mb-4">{property.title}</h1>
          <img src={property.image} alt={property.title} className="img w-75 h-50 mb-4" />
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Price:</strong> ${property.price} per night</p>
          <p>{property.description}</p>
          <h3 className="mt-4">Amenities</h3>
          <ul className="list-group list-group-flush">
            {property.amenities.map((amenity, index) => (
              <li key={index} className="list-group-item">
                <i className="bi bi-check-circle-fill text-success me-2"></i>{amenity}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4 mt-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Book this property</h5>
              <p className="card-text"><strong>${property.price}</strong> / night</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="checkIn" className="form-label">Check-in</label>
                  <input type="date" className="form-control" id="checkIn" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="checkOut" className="form-label">Check-out</label>
                  <input type="date" className="form-control" id="checkOut" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="guests" className="form-label">Guests</label>
                  <input type="number" className="form-control" id="guests" min="1" max={property.maxGuests} required />
                </div>
                <button type="submit" className="btn btn-danger w-100">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;