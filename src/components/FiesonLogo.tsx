import React from 'react';

interface FiesonLogoProps {
  className?: string;
  white?: boolean;
}

const FiesonLogo: React.FC<FiesonLogoProps> = ({ className, white }) => {
  if (white) {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className || "w-full h-full p-1"}>
        <path d="M12 10H22V12H14V16H20V18H14V24H12V10Z" fill="white"/>
      </svg>
    );
  }
  return (
    <img src="/favicon.svg" alt="Fieson AI Logo" className={className || "w-full h-full p-1"} />
  );
};

export default FiesonLogo;
