"use client";
import React, { useState } from "react";

export default function Home() {
  const youtubeLinks = [
    "https://www.youtube.com/embed/5MuIMqhT8DM?si=zNJ3eySDF4u5jWgy",
    "https://www.youtube.com/embed/X4Qm9cGRub0?si=jmeZ272LR9zmisI4",
    "https://www.youtube.com/embed/arj7oStGLkU?si=aH4UeFWb-U8d7fHX",
    "https://www.youtube.com/embed/H14bBuluwB8?si=NyLhlc_g-0S4Vbci"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((currentIndex + 1) % youtubeLinks.length);
  };

  const prevVideo = () => {
    setCurrentIndex((currentIndex - 1 + youtubeLinks.length) % youtubeLinks.length);
  };

  return (
    
    <div className=" flex h-screen justify-center items-center">
      <div className="carousel-container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div className="carousel" style={{ position: 'relative', marginBottom: '20px' }}>
          <iframe
            title={`YouTube Video ${currentIndex}`}
            width="560"
            height="315"
            src={youtubeLinks[currentIndex].replace("watch?v=", "embed/")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="carousel-controls" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '560px' }}>
          <button className="prev-btn" onClick={prevVideo} style={{ color: 'rgba(255, 255, 255, 0.8)', textShadow: '0 0 5px rgba(255, 255, 255, 0.8)', backgroundColor: 'rgba(0, 123, 255, 0.8)', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Prev</button>
          <button className="next-btn" onClick={nextVideo} style={{ color: 'rgba(255, 255, 255, 0.8)', textShadow: '0 0 5px rgba(255, 255, 255, 0.8)', backgroundColor: 'rgba(0, 123, 255, 0.8)', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Next</button>
        </div>
      </div>
    </div>
  );
}