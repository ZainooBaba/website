import React from 'react';
import './AboutUs.css';

export function AboutUs () {
  return (
    <>
    <div className="flex-container" style={{border: '1px solid red'}}>
      <div className="flex-col-50" style={{height: '416px', border: '1px solid green'}}>
        [COL #1]
      </div>

      <div className="flex-col-50 flex-col-max-50" style={{border: '1px solid green'}}>
        [COL #2]
      </div>
    </div>
    </>
  );
};

