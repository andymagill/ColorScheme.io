import React from 'react';

interface SchemeRectGraphicProps {
  colors: string[];
}

const SchemeRectGraphic: React.FC<SchemeRectGraphicProps> = ({ colors }) => {
  return (
    <svg className='w-full' xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      {/*  Background box  */}
      <rect x="0" y="0" 
        width="200" height="200" 
        rx="20" ry="20" 
        fill={colors[4]} 
      />
      {/*  Top left box (oversized)  */}
      <rect x="15" y="15" 
        width="110" height="110" 
        rx="10" ry="10" 
        fill={colors[0]} 
      />
      {/*  Bottom right box (partially overlapped)  */}
      <rect x="100" y="100" 
        width="80" height="80" 
        rx="10" ry="10" 
        fill={colors[1]} 
      />
      {/*  Top right box  */}
      <rect x="140" y="15" 
        width="40" height="70" 
        rx="10" ry="10" 
        fill={colors[2]} 
      />
      {/*  Bottom left box  */}
      <rect x="15" y="140" 
        width="70" height="40" 
        rx="10" ry="10" 
        fill={colors[3]} 
      />
    </svg>
  );
};

export default SchemeRectGraphic;
