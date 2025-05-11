import { useEffect, useRef } from 'react';

const MainContent = ({ isOpen }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

  return (
    <div ref={contentRef} className={`min-h-screen flex flex-col items-center justify-start pt-10 transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>


    </div>
  );
};

export default MainContent;