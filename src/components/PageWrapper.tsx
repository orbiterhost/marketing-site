import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

export default function PageWrapper({ children }: any) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const satelliteControls = useAnimation();
  
  // Satellite orbit animation
  useEffect(() => {
    const animateSatellite = async () => {
      while (true) {
        // Move from left to right (entering screen)
        await satelliteControls.start({
          x: ["calc(-100% - 100px)", "calc(100% + 100px)"],
          y: [100, -100],
          rotate: [0, 15],
          transition: {
            duration: 15,
            ease: "linear",
          },
        });

        // Reset position (off-screen)
        await satelliteControls.set({
          x: "calc(-100% - 100px)",
          y: 100,
        });
      }
    };

    animateSatellite();
  }, [satelliteControls]);

  // Parallax effect for stars
  const starsY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Stars background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: starsY }}>
        <Stars />
      </motion.div>

      {/* Animated satellite */}
      <motion.div
        className="fixed top-0 left-0 z-10 w-24 h-24 md:w-32 md:h-32"
        animate={satelliteControls}
      >
        <Satellite />
      </motion.div>
      {children}
    </div>
  );
}

// Stars component
function Stars() {
  // Generate 200 stars with random positions
  const stars = Array.from({ length: 200 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const opacity = Math.random() * 0.7 + 0.3;
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: opacity,
          animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 2}s`,
        }}
      />
    );
  });

  return <div className="absolute inset-0 overflow-hidden">{stars}</div>;
}

// Satellite component
function Satellite() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main satellite body - white with black lines */}
      <rect
        x="35"
        y="40"
        width="30"
        height="15"
        rx="1"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="0.8"
      />

      {/* Communication dish */}
      <circle
        cx="50"
        cy="35"
        r="5"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="0.8"
      />
      <path
        d="M50 35 L50 30 Q50 25 55 25 L60 25"
        stroke="#000000"
        strokeWidth="1"
        fill="none"
      />

      {/* Solar panels - white with black grid */}
      <g>
        {/* Left panel */}
        <rect
          x="10"
          y="42"
          width="25"
          height="10"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="0.8"
        />
        <line
          x1="15"
          y1="42"
          x2="15"
          y2="52"
          stroke="#000000"
          strokeWidth="0.5"
        />
        <line
          x1="20"
          y1="42"
          x2="20"
          y2="52"
          stroke="#000000"
          strokeWidth="0.5"
        />
        <line
          x1="25"
          y1="42"
          x2="25"
          y2="52"
          stroke="#000000"
          strokeWidth="0.5"
        />
        <line
          x1="30"
          y1="42"
          x2="30"
          y2="52"
          stroke="#000000"
          strokeWidth="0.5"
        />
        <rect
          x="34"
          y="44"
          width="2"
          height="6"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="0.5"
        />
      </g>

      <g>
        {/* Right panel */}
        <rect
          x="65"
          y="42"
          width="25"
          height="10"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="0.8"
        />
        <line
          x1="70"
          y1="42"
          x2="70"
          y2="52"
          stroke="#000000"
          strokeWidth="0.5"
        />
        <line
          x1="75"
          y1="42"
          x2="75"
          y2="52"
          stroke="#000000"
          strokeWidth="0.5"
        />
        <line
          x1="80"
          y1="42"
          x2="80"
          y2="52"
          stroke="#000000"
          strokeWidth="0.5"
        />
        <line
          x1="85"
          y1="42"
          x2="85"
          y2="52"
          stroke="#000000"
          strokeWidth="0.5"
        />
        <rect
          x="64"
          y="44"
          width="2"
          height="6"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="0.5"
        />
      </g>

      {/* Antennas */}
      <line
        x1="40"
        y1="40"
        x2="40"
        y2="32"
        stroke="#000000"
        strokeWidth="0.8"
      />
      <circle cx="40" cy="31" r="1" fill="#000000" />

      <line
        x1="60"
        y1="40"
        x2="60"
        y2="32"
        stroke="#000000"
        strokeWidth="0.8"
      />
      <circle cx="60" cy="31" r="1" fill="#000000" />

      {/* Thrusters */}
      <rect
        x="38"
        y="55"
        width="4"
        height="2"
        rx="1"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="0.5"
      />
      <rect
        x="58"
        y="55"
        width="4"
        height="2"
        rx="1"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="0.5"
      />

      {/* Status lights */}
      <circle cx="42" cy="45" r="1" fill="#FF0000">
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="58" cy="45" r="1" fill="#FF0000">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Additional details */}
      <rect
        x="45"
        y="38"
        width="10"
        height="2"
        rx="1"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="0.5"
      />
      <rect
        x="48"
        y="55"
        width="4"
        height="3"
        rx="1"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="0.5"
      />

      {/* Extra technical details */}
      <line
        x1="37"
        y1="43"
        x2="43"
        y2="43"
        stroke="#000000"
        strokeWidth="0.5"
      />
      <line
        x1="57"
        y1="43"
        x2="63"
        y2="43"
        stroke="#000000"
        strokeWidth="0.5"
      />
      <line
        x1="37"
        y1="52"
        x2="43"
        y2="52"
        stroke="#000000"
        strokeWidth="0.5"
      />
      <line
        x1="57"
        y1="52"
        x2="63"
        y2="52"
        stroke="#000000"
        strokeWidth="0.5"
      />
    </svg>
  );
}