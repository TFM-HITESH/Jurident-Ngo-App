// pages/index.tsx

import HoverButton from '@/Components/HoverButton';
import React from 'react';

const VideoPage: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute object-cover w-full h-full"
      >
        <source
          src="/Videos/FishCircle.mp4"  // Replace with the path to your video file
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-lilita text-black">
        <h1 className="text-7xl md:text-4xl lg:text-8xl  font-bold mb-4">PACIFICO</h1>
        <p className="text-3xl md:text-4xl lg:text-4xl">#MarineLivesMatter</p>
        <HoverButton />
      </div>
    </div>
  );
};

export default VideoPage;
