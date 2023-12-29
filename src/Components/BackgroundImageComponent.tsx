import React from 'react';

const BackgroundImageComponent = () => {
  const backgroundImagePath = '/public/Images/coral.png'; // Relative path to the image in the public directory

  const containerStyles = {
    backgroundImage: `url(${backgroundImagePath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px', // Set the desired height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Text color on top of the image
  };

  return (
    <div style={containerStyles}>
      <h1>Your Content Goes Here</h1>
    </div>
  );
};

export default BackgroundImageComponent;
