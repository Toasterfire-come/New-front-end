import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
      size="lg"
    >
      <ArrowUp className="w-5 h-5" />
      <span className="sr-only">Back to top</span>
    </Button>
  );
};

export default BackToTop;