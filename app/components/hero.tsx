import React from 'react';
import '../styles/components/hero.css';

export default function Hero( { heroImage = '', children = null } : 
    { heroImage?: string; children?: React.ReactNode })
{
    const style = heroImage ?
        { backgroundImage: `url(${heroImage})` } :
        { background: 'radial-gradient(farthest-side at top left, rgba(255, 0, 238, 0.822), transparent ), radial-gradient(farthest-corner at bottom right, rgba(255, 111, 50, 0.76), transparent 60%), #7ffddd' }; 

    return (
      <div className="hero py-8 px-4 bg-cover bg-center" style={style} >
        <div className='wrapper sm:w-2/3 text-white'>
            {children}
        </div>
      </div>
    );
};
