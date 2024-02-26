import React, { useEffect, useState } from 'react';
import './index.css';
import { ChevronUpIcon } from '@chakra-ui/icons';

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="scroll-to-top"
      style={{ display: showButton ? 'block' : 'none' }}
      onClick={handleClick}
    >
      <ChevronUpIcon />
    </button>
  );
};

export default GoToTopButton;
