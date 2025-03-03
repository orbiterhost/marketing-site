import { useState, useEffect, useRef } from 'react';

const CompetitorDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const competitors = ['Netlify', 'Vercel', 'Cloudflare', 'Github Pages'];
  const wrapperRef = useRef(null);

  // Function to set wrapper width based on widest competitor name
  const setWrapperWidth = () => {
    if (!wrapperRef.current) return;
    
    // Create temporary span to measure text width
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.fontSize = window.getComputedStyle(wrapperRef.current).fontSize;
    tempSpan.style.fontWeight = window.getComputedStyle(wrapperRef.current).fontWeight;
    document.body.appendChild(tempSpan);
    
    // Find the widest text
    let maxWidth = 0;
    competitors.forEach(text => {
      tempSpan.textContent = text;
      const width = tempSpan.getBoundingClientRect().width;
      maxWidth = Math.max(maxWidth, width);
    });
    
    // Set minimum width with some padding
    wrapperRef.current.style.minWidth = (maxWidth + 20) + 'px';
    document.body.removeChild(tempSpan);
  };

  // Rotate through competitors
  useEffect(() => {
    // Initial setup
    setWrapperWidth();
    
    // Set up rotation interval
    const rotationTimer = setInterval(() => {
      setFading(true);
      
      // After fade out animation completes, change text and fade back in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % competitors.length);
        setFading(false);
      }, 500);
    }, 3000);
    
    // Handle window resize
    window.addEventListener('resize', setWrapperWidth);
    
    // Clean up
    return () => {
      clearInterval(rotationTimer);
      window.removeEventListener('resize', setWrapperWidth);
    };
  }, []);

  return (
    <span className="competitor-wrapper text-center" ref={wrapperRef}>
      <span 
        className={`competitor ${fading ? 'fade-out' : 'fade-in'}`}
      >
        {competitors[currentIndex]}
      </span>
    </span>
  );
};

export default CompetitorDisplay;