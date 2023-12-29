// pages/index.tsx

import ContactUsButton from '@/Components/ContactUsButton';
import HoverButton from '@/Components/HoverButton';
import React from 'react';

const FooterVideo: React.FC = () => {
  return (
    <div className="relative h-[20vh]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute object-cover w-full h-full"
      >
        <source
          src="/Videos/BottomCoral.mp4"  // Replace with the path to your video file
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-lilita text-black">
        
        <div className="flex flex-auto items-center justify-center container mx-auto">
                    <ContactUsButton />
                </div>
      </div>
    </div>
  );
};

export default FooterVideo;
