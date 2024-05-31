import React from 'react';
import '../styles/components/scheme-item.css';

export default function SchemeItem( { id = 0, colors = '' } : 
    { id?: number; colors?: string })
{
  if (id) {
    // TODO: Fetch scheme by ID
  } else if ( colors ) {
    // TODO: set colors via array of hexcodes
  } else {
    // TODO: Generate random colors
  }

  return (
    <section className="scheme-item p-2">
      <div className='inner'>
          {/* { TODO show colors } */}
      </div>
    </section>
  );
};


