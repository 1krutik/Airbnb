import React from 'react';
import { Link } from 'react-router-dom';
import { getProperties } from '../services/propertyService';

function Home() {
  const featuredProperties = getProperties().slice(0, 9); 
    return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3 text-dark text-bold" style={{fontFamily :'roboto'}}>Welcome to Airbnb</h1>
        <p className="lead mb-4">Find your perfect stay from our curated selection of beautiful accommodations worldwide.</p>
        <Link to="/properties" className="btn btn-danger btn-lg">Browse Properties</Link>
      </div>
      
      <h2 className="mb-4">Featured Properties</h2>
      <div className="row">
        {featuredProperties.map((property) => (
          <div key={property.id} className="col-md-4 mb-4">
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
        ))}
      </div>
    </div>
  );
}

export default Home;