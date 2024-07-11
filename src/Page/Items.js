// src/components/ImageGallery.js

import React from 'react';
import './item.css';

const ImageGallery = () => {
  const items = [
    { id: 1, src: 'images/modelImage.PNG', title: 'Image 1', description: 'Description for image 1' },
    { id: 2, src: 'images/modelImage.PNG', title: 'Image 2', description: 'Description for image 2' },
    { id: 3, src: 'images/modelImage.PNG', title: 'Image 3', description: 'Description for image 3' },
    { id: 4, src: 'images/modelImage.PNG', title: 'Image 4', description: 'Description for image 4' }
  ];

  return (
    <div className="image-gallery">
      {items.map(item => (
        <div key={item.id} className="gallery-item">
          <img src={item.src} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
