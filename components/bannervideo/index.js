import React, { useEffect, useState } from 'react';
import backgroundImage from '../../public/images/banner/one.jpg'; // Import your background image
import leftLogo from '../../public/images/banner/logo1.jpg'; // Import left logo image
import rightLogo from '../../public/images/banner/logo2.png'; // Import right logo image

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than or equal to 768px (typical mobile screen width)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  useEffect(() => {
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

  const handleLoadedData = () => {
    // Video loaded, attempt to play it
    playVideo();
  };

  const handleButtonClick = () => {
    const video = document.getElementById('myVideo');
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div
      className="background-container"
      style={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(/images/banner/banner1.jpg)`, // Set the background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Left logo */}
      {!isMobile && (
        <img
          src="/images/banner/logo1.jpg"
          alt="Left Logo"
          style={{
            position: 'absolute',
            left: '10%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: '2',
            width: '20%',
          }}
        />
      )}
      
      {/* Right logo */}
      {!isMobile && (
        <img
          src="/images/banner/logo2.png"
          alt="Right Logo"
          style={{
            position: 'absolute',
            right: '10%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: '2',
            width: '25%',
          }}
        />
      )}

      <div
        className="main"
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          
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
            // borderRadius: '20px',
          }}
        ></div>
        <video
          id="myVideo"
          src="/video.mp4" 
          loop
          // Add muted attribute for autoplay to work in some browsers
          onLoadedData={handleLoadedData} // Handle loaded data event
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
          <button onClick={handleButtonClick} style={{ fontSize: '24px', color: 'white', background: 'rgba(0, 0, 0, 0.5)', border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer' }}>
            Play/Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
