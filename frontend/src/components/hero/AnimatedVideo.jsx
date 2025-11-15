import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const AnimatedYouTubeVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top center",
          end: "bottom 80%",
          scrub: 2,
        }
      })
      .fromTo(videoRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1.5, ease: 'power3.out' })
    }
  }, []);

  return (
    <div
      ref={videoRef}
      className="w-full max-w-4xl mx-auto my-20 overflow-hidden rounded-lg shadow-lg"
    >
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src="https://www.youtube.com/embed/LDTtdyDn1Xs?si=G7fRbZZJ84GbvD5C" // Replace with your video URL
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default AnimatedYouTubeVideo;
