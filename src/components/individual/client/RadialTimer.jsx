"use client"
import { useEffect, useState, useRef } from 'react';

const RadialTimer = () => {
    const maxTime = 30 * 60;             // Maximum is 30 minutes (in seconds)
  const startingTime = 17 * 60 + 22;     // Starting at 17 minutes 22 seconds
  const [currentTime, setCurrentTime] = useState(startingTime);

  // Auto-countdown: update the time every second until it reaches 0.
  useEffect(() => {
    if (currentTime <= 0) return;
    const timer = setInterval(() => {
      setCurrentTime((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentTime]);

  // SVG dimensions and circle settings
  const svgSize = 220;
  const center = svgSize / 2;
  const radius = 100;
  const circumference = 2 * Math.PI * radius;

  // Compute progress so that as time reduces the arc fills up.
  // Here progress = 1 - (timeLeft / maxTime).
  // At the start: currentTime = startingTime (or maxTime if desired)
  // When currentTime === maxTime, progress is 0 (arc empty).
  // When currentTime === 0, progress is 1 (arc full).
  const progress = 1 - currentTime / maxTime;
  const strokeDashoffset = circumference * (1 - progress);

  // Calculate thumb's position based on progress.
  // Angle is computed so that 0 progress is at -90° (top) and it increases clockwise.
  const angleInRadians = ((progress * 360 - 90) * Math.PI) / 180;
  const thumbX = center + radius * Math.cos(angleInRadians);
  const thumbY = center + radius * Math.sin(angleInRadians);

  // Format current time into hours and minutes.
  const hrs = Math.floor(currentTime / 3600);
  const mins = Math.floor((currentTime % 3600) / 60);
  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
<div className="flex items-center justify-center">
<div className="relative">
        <svg width={svgSize} height={svgSize} className="transform -rotate-90">
          <defs>
            {/* Define a linear gradient for the progress arc */}
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF8F45" />
              <stop offset="100%" stopColor="#FF6141" />
            </linearGradient>
          </defs>
          {/* Background track (thin and light) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#FFFFFF1F"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Progress arc (constant stroke width using gradient) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        {/* Thumb icon that moves smoothly along the circle */}
        <div
          className="absolute w-5 h-5 bg-white rounded-full shadow-md transition-all duration-200 ease-linear"
          style={{
            top: thumbY - 11,
            left: thumbX - 11,
          }}
        />
        {/* Center display with time and labels */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="flex space-x-4">
            <div className="flex flex-col items-center">
              <span className="text-white font-mont text-3xl font-extrabold">
                {formatNumber(hrs)}
              </span>
              <span className="text-primary text-lg font-bebas">hrs</span>
            </div>
            <span className="text-white font-mont text-3xl font-extrabold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-white font-mont text-3xl font-extrabold">
                {formatNumber(mins)}
              </span>
              <span className="text-primary text-lg font-bebas">min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default RadialTimer
