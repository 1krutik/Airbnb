import React from 'react';

function About() {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', image: 'https://picsum.photos/seed/ceo/150/150' },
    { name: 'Jane Smith', role: 'CTO', image: 'https://picsum.photos/seed/cto/150/150' },
    { name: 'Mike Johnson', role: 'Head of Design', image: 'https://picsum.photos/seed/design/150/150' },
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4">About AirbnbClone</h1>
      <div className="row">
        <div className="col-md-6">
          <img src="https://a0.muscache.com/im/pictures/a1d94df4-0001-47ef-a45e-21db63919e79.jpg?im_w=720" alt="About Us" className="img-fluid mb-3" />
          <p>
            AirbnbClone is a platform that connects travelers with unique accommodations around the world. 
            Our mission is to create a world where anyone can belong anywhere, providing healthy travel 
            that is local, authentic, diverse, inclusive and sustainable.
          </p>
          <p>
            Founded in 2023, AirbnbClone has grown from a small startup to a global community offering 
            millions of stays and experiences. We continue to innovate on our platform, developing new 
            technologies and services that make it easier for people to open their homes or lead experiences.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Our Values</h3>
          <ul className="list-group mb-4">
            <li className="list-group-item">Champion the mission</li>
            <li className="list-group-item">Be a host</li>
            <li className="list-group-item">Embrace the adventure</li>
            <li className="list-group-item">Be a cereal entrepreneur</li>
          </ul>
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1041398366372889590/original/37eec4e5-40fe-4167-a296-7db08ac68d9f.jpeg?im_w=720" alt="Our Values" className="img-fluid" />
        </div>
      </div>
      
    </div>
  );
}

export default About;