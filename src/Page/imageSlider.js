import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'images/orientImage1.PNG',
  },
  {
    url: 'images/orientImage2.PNG',
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide arrows={false} duration={300000}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="slide-item">
            <div
              className="slide-image"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
