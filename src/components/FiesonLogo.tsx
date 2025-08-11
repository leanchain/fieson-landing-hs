import React from 'react';

interface FiesonLogoProps {
  className?: string;
  white?: boolean;
}

const FiesonLogo: React.FC<FiesonLogoProps> = ({ className, white }) => {
  const imgSrc = white ? "/favicon-white.svg" : "/favicon.svg";
  return (
    <img src={imgSrc} alt="Fieson AI Logo" className={className || "w-full h-full p-1"} />
  );
};

export default FiesonLogo;
