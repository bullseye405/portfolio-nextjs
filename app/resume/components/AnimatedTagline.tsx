'use client';

import React, { useEffect, useState } from 'react';

// Available animations
const taglines = [
  'React | Node.js | TypeScript | AWS — Full-Stack Developer',
  'Building innovative solutions, one line of code at a time',
  'Crafting clean, maintainable code for scalable applications',
  'Coding, coffee, and solving complex problems ☕',
  'Open to freelance & remote work',
  "I'm Capricorn. What's your superpower?",
];

type AnimatedTaglineProps = {
  animationStyle: 'typewriter' | 'slide' | 'flip';
};

const AnimatedTagline: React.FC<AnimatedTaglineProps> = ({
  animationStyle,
}) => {
  const [text, setText] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTagline = taglines[taglineIndex];
    if (animationStyle === 'typewriter') {
      if (charIndex < currentTagline.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + currentTagline.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        }, 100); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        const pause = setTimeout(() => {
          setText('');
          setCharIndex(0);
          setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }, 2000); // Pause before next tagline
        return () => clearTimeout(pause);
      }
    } else if (animationStyle === 'slide') {
      setText(currentTagline);
      const interval = setInterval(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    } else if (animationStyle === 'flip') {
      setText(currentTagline);
      const interval = setInterval(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [charIndex, taglineIndex, animationStyle]);

  if (animationStyle === 'typewriter') {
    return (
      <p className="mt-1 text-sm text-gray-500 min-h-[20px] text-center md:text-left">
        {text}
        <span className="animate-pulse">|</span>
      </p>
    );
  }

  if (animationStyle === 'slide') {
    return (
      <p className="mt-1 text-sm text-gray-500 min-h-[20px] text-center md:text-left slide-in-animation">
        {text}
      </p>
    );
  }

  if (animationStyle === 'flip') {
    return (
      <p className="mt-1 text-sm text-gray-500 min-h-[20px] text-center md:text-left flip-animation">
        {text}
      </p>
    );
  }

  return null;
};

export default AnimatedTagline;
