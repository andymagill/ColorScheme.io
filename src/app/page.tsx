import React from 'react';
import ToolTray from './components/tool-tray'; 

const Homepage = () => {
  return (
    <>
      <main className="p-4">
        <div className="gallery">
          {/* TODO Add logic to display gallery of random color schemes */}
        </div>
      </main>

      <ToolTray />
    </>
  );
};

export default Homepage;
