import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  loop?: boolean;
  className?: string;
}

const TypewriterText = ({ text, speed = 100, loop = false, className = '' }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (loop) {
      const timer = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, loop]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;

