const Dots = ({ className }) => (
  <svg 
    width="84" 
    height="84" 
    viewBox="0 0 84 84" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {Array.from({ length: 25 }).map((_, i) => (
      <circle 
        key={i} 
        cx={(i % 5) * 20 + 2} 
        cy={Math.floor(i / 5) * 20 + 2} 
        r="2" 
        fill="currentColor" 
      />
    ))}
  </svg>
);

export default Dots;