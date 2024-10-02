const properties = [
    {
      id: 1,
      title: 'Luxury Beach Villa',
      location: 'Malibu, CA',
      price: 500,
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?im_w=1440&im_q=highq',
      description: 'Experience luxury living in this stunning beachfront villa. Enjoy breathtaking ocean views, direct beach access, and top-notch amenities.',
      bedrooms: 4,
      bathrooms: 3,
      maxGuests: 8,
      amenities: ['Wi-Fi', 'Full Kitchen', 'Private Pool', 'Beach Access', 'Air Conditioning', 'BBQ Grill', 'Parking']
    },
    {
      id: 2,
      title: 'Mountain Retreat',
      location: 'Aspen, CO',
      price: 300,
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/b676fc8d-8250-4df0-a7cb-728b0486e371.jpeg?im_w=1440&im_q=highq',
      description: 'Escape to this cozy mountain cabin for a peaceful getaway. Surrounded by nature, perfect for hiking and skiing enthusiasts.',
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 6,
      amenities: ['Wi-Fi', 'Fireplace', 'Hot Tub', 'Mountain View', 'Hiking Trails', 'Ski Storage']
    },
    {
      id: 3,
      title: 'City Center Loft',
      location: 'New York, NY',
      price: 200,
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/76f85a0c-b3e2-4f1d-9aa9-d7838f2393c6.jpeg?im_w=1440&im_q=highqhttps://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/b16970cf-1d55-4edd-bb1f-e1735d0a228e.jpeg?im_w=1440&im_q=highq',
      description: 'Modern loft in the heart of the city. Walking distance to major attractions, restaurants, and shopping.',
      bedrooms: 1,
      bathrooms: 1,
      maxGuests: 2,
      amenities: ['Wi-Fi', 'City View', 'Gym Access', 'Doorman', 'Washer/Dryer', 'Public Transportation']
    },
    {
      id: 4,
      title: 'Seaside Cottage',
      location: 'Cape Cod, MA',
      price: 150,
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/365299e3-f926-47ee-bcbf-606d6a0370b9.jpeg?im_w=1440&im_q=highq',
      description: 'Charming cottage by the sea. Enjoy peaceful walks on the beach and beautiful sunsets from your private patio.',
      bedrooms: 2,
      bathrooms: 1,
      maxGuests: 4,
      amenities: ['Wi-Fi', 'Beach Access', 'Patio', 'BBQ Grill', 'Bikes', 'Parking']
    },
    {
      id: 5,
      title: 'Desert Oasis',
      location: 'Palm Springs, CA',
      price: 275,
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-37116726/original/52ea5b06-8c01-4ba4-8a18-8365400ac6c2.jpeg?im_w=720',
      description: 'Modern home with a private pool in the heart of the desert. Perfect for those seeking sun and relaxation.',
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 6,
      amenities: ['Wi-Fi', 'Private Pool', 'Hot Tub', 'Mountain View', 'Air Conditioning', 'Outdoor Shower']
    },
    {
      id: 6,
      title: 'Rustic Cabin',
      location: 'Lake Tahoe, NV',
      price: 180,
      image: 'https://a0.muscache.com/im/pictures/07b4ee1f-8852-48df-ba06-73c0c2f43f3c.jpg?im_w=720',
      description: 'Cozy cabin in the woods near Lake Tahoe. Great for nature lovers and outdoor enthusiasts.',
      bedrooms: 2,
      bathrooms: 1,
      maxGuests: 4,
      amenities: ['Wi-Fi', 'Fireplace', 'Lake View', 'Hiking Trails', 'Canoe', 'Fire Pit']
    },
    {
      id: 7,
      title: 'Downtown Apartment',
      location: 'Chicago, IL',
      price: 140,
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=60',
      description: 'Stylish apartment in downtown Chicago. Close to public transportation, restaurants, and major attractions.',
      bedrooms: 1,
      bathrooms: 1,
      maxGuests: 2,
      amenities: ['Wi-Fi', 'City View', 'Gym', 'Doorman', 'Washer/Dryer', 'Public Transportation']
    },
    {
      id: 8,
      title: 'Beachfront Bungalow',
      location: 'Honolulu, HI',
      price: 225,
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=60',
      description: 'Tropical bungalow right on the beach. Fall asleep to the sound of waves and wake up to stunning ocean views.',
      bedrooms: 1,
      bathrooms: 1,
      maxGuests: 3,
      amenities: ['Wi-Fi', 'Beach Access', 'Ocean View', 'Air Conditioning', 'Kitchenette', 'Snorkeling Gear']
    },
    
    {
      id: 9,
      title: 'Lakeside Retreat',
      location: 'Lake George, NY',
      price: 280,
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60',
      description: 'Spacious home on the shores of Lake George. Perfect for family vacations with plenty of outdoor activities.',
      bedrooms: 4,
      bathrooms: 3,
      maxGuests: 10,
      amenities: ['Wi-Fi', 'Lake Access', 'Boat Dock', 'Fire Pit', 'Game Room', 'Kayaks']
    }
  ];
  
  export const getProperties = () => {
    return properties;
  };
  
  export const getPropertyById = (id) => {
    return properties.find(property => property.id === parseInt(id));
  };