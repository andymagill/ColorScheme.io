import React from 'react';
import Hero from './components/hero'; 
import ToolTray from './components/tool-tray'; 

const Homepage = () => {
  return (
    <>
      <main className="">
        <Hero heroImage='/images/hero/mural-3.jpg' >
            <h1 className='bold text-2xl'>Welcome to ColorScheme.io</h1>
            <p>Select the best color&nbsp;scheme for your next&nbsp;project. Get&nbsp;inspired by an endless collection of user created color&nbsp;schemes. </p>
        </Hero>

        <div className="gallery">
          <h2 className='bold text-2xl'>Explore Color Schemes</h2>
          {/* TODO Add logic to display gallery of random color schemes */}
        </div>
      </main>

      <ToolTray />
    </>
  );
};

export default Homepage;
