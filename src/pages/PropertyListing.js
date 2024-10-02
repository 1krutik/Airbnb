import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={property.image} className="card-img-top" alt={property.title} style={{height: '200px', objectFit: 'cover'}} />
        <div className="card-body">
          <h5 className="card-title">{property.title}</h5>
          <p className="card-text">{property.location}</p>
          <p className="card-text"><strong>${property.price}</strong> / night</p>
          <Link to={`/properties/${property.id}`} className="btn btn-danger">View Details</Link>
        </div>
      </div>
    </div>
  );
}

function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      try {
       
        setTimeout(() => {
          const Properties = [
            { id: 1, title: 'Cozy Apartment', location: 'New York', price: 100, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60' },
            { id: 2, title: 'Luxury Villa', location: 'Los Angeles', price: 300, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60' },
            { id: 3, title: 'Mountain Cabin', location: 'Denver', price: 150, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60' },
            { id: 4, title: 'Beach House', location: 'Miami', price: 200, image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60' },
            { id: 5, title: 'Downtown Loft', location: 'Chicago', price: 120, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60' },
            { id: 6, title: 'Rustic Farmhouse', location: 'Austin', price: 180, image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=60' },
          ];
          setProperties(Properties);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch properties. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) return <div className="text-center py-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="alert alert-danger text-center py-5" role="alert">{error}</div>;

  return (
    <div className="container py-5">
      <h3 className="mb-4">Available Properties</h3>
      <div className="row">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyListing;