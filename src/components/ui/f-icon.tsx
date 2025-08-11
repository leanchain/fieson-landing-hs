import React from 'react';

interface FIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const FIcon: React.FC<FIconProps> = ({ size = 32, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="32" height="32" rx="8" fill="currentColor"/>
    <path d="M12 10H22V12H14V16H20V18H14V24H12V10Z" fill="white"/>
  </svg>
);

export default FIcon;
