import React from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-gray-800 font-bold">${property.price} / night</p>
        <Link to={`/properties/${property.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;