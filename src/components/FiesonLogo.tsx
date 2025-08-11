import React from 'react';

interface FiesonLogoProps {
  className?: string;
}

const FiesonLogo: React.FC<FiesonLogoProps> = ({ className }) => {
  return (
    <img src="/favicon.svg" alt="Fieson AI Logo" className={className || "w-full h-full p-1"} />
  );
};

export default FiesonLogo;
