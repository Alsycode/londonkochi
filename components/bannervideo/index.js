import React, { useEffect } from 'react';
import backgroundImage from '../../public/images/banner/one.jpg'; // Import your background image

const Main = () => {
  useEffect(() => {
    // Function to play the video
    const playVideo = () => {
      const video = document.getElementById('myVideo');
      if (video) {
        video.play().catch(error => {
          // Autoplay was prevented
          console.error('Autoplay was prevented:', error);
        });
      }
    };

    // Attempt to play the video when the component mounts
    playVideo();

    // Clean up
    return () => {
      // Optionally, you can pause the video when the component unmounts
      const video = document.getElementById('myVideo');
      if (video) {
        video.pause();
      }
    };
  }, []);

  return (
    <div
      className="background-container"
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(/images/banner/one.jpg)`, // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="main"
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          borderRadius: '20px',
          zIndex: 1,
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,.4)',
            zIndex: 1,
            borderRadius: '20px'
          }}
        ></div>
        <video
          id="myVideo"
          src="/video.mp4" 
          autoPlay
          loop
          muted // Add muted attribute for autoplay to work in some browsers
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 0,
          }}
        />
        <div
          className="content"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            zIndex: 2,
          }}
        >
          {/* Your content here */}
        </div>
      </div>
    </div>
  );
};

export default Main;
