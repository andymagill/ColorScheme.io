import React from 'react';
import Hero from '../components/hero'; 
import SchemeList from '../components/scheme-list'; 
import ToolTray from '../components/tool-tray'; 

const Saved = () => {
  return (
    <>
      <main>
        <Hero>
          <h1>Your Saved Color Schemes </h1>
        </Hero>

        <SchemeList src="saved"/>
      </main>

      <ToolTray />
    </>
  );
};

export default Saved;
