import React from 'react';
import StyleLogo from './styled';

const Log = () => {
  return (
    <StyleLogo>
      <div className="logo">
        <svg>
          <circle cx="25" cy="25" r="15" />
          <text textAnchor="middle" x="25" y="35">
            T
          </text>
        </svg>
        <h3>Trafalgar</h3>
      </div>

      <div></div>
    </StyleLogo>
  );
};

export default Log;
