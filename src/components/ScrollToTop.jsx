import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll position to toggle visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if scrolled down more than 300 pixels
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 border border-primary text-white bg-background hover:bg-[#C778DD44] transition-all duration-300 cursor-pointer shadow-lg"
      aria-label="Scroll to top"
    >
      {/* Simple Up Arrow SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;